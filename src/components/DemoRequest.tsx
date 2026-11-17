import { useState, type ReactNode } from 'react';
import { Alert, Button, Form, Input, InputNumber, Modal, Result } from 'antd';
import { useCopy, useLocale } from '../i18n';
import { APP_URL } from '../siteMeta';

// The app's API. VITE_API_URL points a local build at a local API, so a test never emails the real sales address.
const API_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? APP_URL;

interface DemoFormValues {
  name: string;
  email: string;
  company?: string;
  buildings?: number;
  message?: string;
  /** Hidden from people; a script that fills it in is ignored by the API. */
  website?: string;
}

/**
 * "Book a demo": a short form in a dialog, sent to the API, which emails it to
 * the Condoclar team. Call `open()` from any button and render `modal` once.
 */
export function useDemoRequest(): { open: () => void; modal: ReactNode } {
  const copy = useCopy().company?.demo;
  const locale = useLocale();
  const [form] = Form.useForm<DemoFormValues>();
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!copy) return { open: () => undefined, modal: null };

  const close = () => {
    setVisible(false);
    setError(null);
    if (sent) {
      setSent(false);
      form.resetFields();
    }
  };

  const submit = async (values: DemoFormValues) => {
    setSending(true);
    setError(null);
    try {
      const body = Object.fromEntries(
        Object.entries({ ...values, locale }).filter(([, value]) => value !== undefined && value !== null && value !== ''),
      );
      const response = await fetch(`${API_URL}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        setError(response.status === 429 ? copy.errorBusy : copy.error);
        return;
      }
      setSent(true);
    } catch {
      setError(copy.error);
    } finally {
      setSending(false);
    }
  };

  const modal = (
    <Modal open={visible} onCancel={close} centered width={520} footer={null} title={sent ? null : copy.title} destroyOnClose={false}>
      {sent ? (
        <Result
          status="success"
          title={copy.sentTitle}
          subTitle={copy.sentBody}
          extra={
            <Button type="primary" size="large" onClick={close}>
              {copy.close}
            </Button>
          }
        />
      ) : (
        <>
          <p className="demo-form__intro">{copy.intro}</p>
          <Form form={form} layout="vertical" requiredMark="optional" onFinish={submit}>
            <Form.Item name="name" label={copy.name} rules={[{ required: true, whitespace: true, message: copy.nameRequired }]}>
              <Input size="large" maxLength={200} autoComplete="name" />
            </Form.Item>
            <Form.Item
              name="email"
              label={copy.email}
              rules={[{ required: true, type: 'email', message: copy.emailRequired }]}
            >
              <Input size="large" type="email" maxLength={320} autoComplete="email" />
            </Form.Item>
            <div className="demo-form__row">
              <Form.Item name="company" label={copy.company}>
                <Input size="large" maxLength={200} autoComplete="organization" />
              </Form.Item>
              <Form.Item name="buildings" label={copy.buildings}>
                <InputNumber size="large" min={1} max={100000} precision={0} style={{ width: '100%' }} />
              </Form.Item>
            </div>
            <Form.Item name="message" label={copy.message}>
              <Input.TextArea rows={3} maxLength={2000} placeholder={copy.messagePlaceholder} />
            </Form.Item>
            {/* Off-screen and out of the tab order: people never see it, form-filling scripts do. */}
            <div className="demo-form__trap" aria-hidden="true">
              <Form.Item name="website" label="Website">
                <Input tabIndex={-1} autoComplete="off" />
              </Form.Item>
            </div>
            {error && <Alert type="error" showIcon message={error} style={{ marginBottom: 16 }} />}
            <Button type="primary" size="large" htmlType="submit" loading={sending} block>
              {copy.submit}
            </Button>
            <p className="demo-form__note">{copy.note}</p>
          </Form>
        </>
      )}
    </Modal>
  );

  return { open: () => setVisible(true), modal };
}
