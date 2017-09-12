export const showNotificationBar = (crdNm) => {
  return ({
    'notificationMessage': `${crdNm}`,
    'notificationBgColor': '#00AE4D',
    'shouldShowNotification': true,
    'notificationIcon': 'icon_check_circle_outlined',
    'notificationAutoCloseMilli': 3000,
    'enableAutoClose': false
  })
};

export const hideNotificationBar = (crdNm) => {
  return ({
    'notificationMessage': `${crdNm}`,
    'notificationBgColor': '#00AE4D',
    'shouldShowNotification': false,
    'notificationIcon': 'icon_check_circle_outlined',
    'notificationAutoCloseMilli': 3000,
    'enableAutoClose': false
  })
};

export const showVersionNotificationBar = (crdNm) => {
  return ({
    'notificationMessage': `${crdNm}`,
    'notificationBgColor': '#00AE4D',
    'shouldShowNotification': true,
    'notificationIcon': 'icon_check_circle_outlined',
    'notificationAutoCloseMilli': 3000,
    'enableAutoClose': false
  })
};

export const showVersionDeletedNotificationBar = (crdNm) => {
  return ({
    'notificationMessage': `${crdNm}`,
    'notificationBgColor': '#00AE4D',
    'shouldShowNotification': true,
    'notificationIcon': 'icon_check_circle_outlined',
    'notificationAutoCloseMilli': 3000,
    'enableAutoClose': false
  })
};

export const hideVersionNotificationBar = (crdNm) => {
  return ({
    'notificationMessage': `${crdNm}`,
    'notificationBgColor': '#00AE4D',
    'shouldShowNotification': false,
    'notificationIcon': 'icon_check_circle_outlined',
    'notificationAutoCloseMilli': 3000,
    'enableAutoClose': false
  })
};

export const showErrorNotificationBar = (crdNm) => {
  return ({
    'notificationMessage': `Unable to process the request - ${crdNm}.`,
    'notificationBgColor': '#ff0000',
    'shouldShowNotification': true,
    'notificationIcon': '',
    'notificationAutoCloseMilli': 3000,
    'enableAutoClose': false
  })
};

export const PROJECT_FILTER = 'projectFilter';
export const TYPE_FILTER = 'typeFilter';
export const TECHNIQUE_FILTER = 'techniqueFilter';
export const EXPERIENCE_FILTER = 'experienceFilter';
