import { useState, type ReactNode } from 'react';
import { Button, Modal } from 'antd';
import { ToolOutlined } from '@ant-design/icons';
import { useCopy } from '../i18n';

/**
 * Sign-ups are paused while the redesign is built (Nov 2026). Every button
 * that used to open the app calls `open()` instead and renders `modal`, so
 * visitors get a friendly "come back in a month" rather than the old product.
 * To reopen the app: restore `href={APP_URL}` at the call sites and delete this.
 */
export function useComingSoon(): { open: () => void; modal: ReactNode } {
  const [visible, setVisible] = useState(false);
  const copy = useCopy().comingSoon;

  const modal = (
    <Modal
      open={visible}
      onCancel={() => setVisible(false)}
      centered
      width={480}
      footer={
        <Button type="primary" size="large" block onClick={() => setVisible(false)}>
          {copy.button}
        </Button>
      }
    >
      <div className="coming-soon">
        <div className="coming-soon__icon" aria-hidden="true">
          <ToolOutlined />
        </div>
        <span className="eyebrow">{copy.eyebrow}</span>
        <h3>{copy.title}</h3>
        <p>{copy.body}</p>
        <p>
          <strong>{copy.comeBack}</strong>
        </p>
      </div>
    </Modal>
  );

  return { open: () => setVisible(true), modal };
}
