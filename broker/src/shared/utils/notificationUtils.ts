import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

const [api, contextHolder] = notification.useNotification();

export const openNotification = (placement: NotificationPlacement) => {
  api.info({
    message: `Notification ${placement}`,
    placement,
  });
};

export const notificationContextHolder = contextHolder;
