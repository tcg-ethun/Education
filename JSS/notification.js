
  document.addEventListener('DOMContentLoaded', () => {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
      const id = notification.getAttribute('data-id');
      const readStatus = localStorage.getItem('notification_read_' + id);
      if(readStatus === 'true') {
        notification.classList.remove('unread');
        notification.classList.add('read');
        notification.onclick = null;
      }
    });
  });

  function markRead(event, element) {
    if(element.classList.contains('read')) return;

    element.classList.remove('unread');
    element.classList.add('read');

    const id = element.getAttribute('data-id');
    localStorage.setItem('notification_read_' + id, 'true');

    element.onclick = null;
  }
