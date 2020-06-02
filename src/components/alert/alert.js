import alertify from 'alertifyjs';

export class Alert {
  showSuccess(message) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.success(message);
  }

  showFailed(message) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.error(message);
  }
}

export default Alert;
