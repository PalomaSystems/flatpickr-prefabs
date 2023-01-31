import flatpickr from 'flatpickr'
export const dateofbirthpicker = () => {
	flatpickr('.dateofbirthpicker', {
		dateFormat: 'd/m/Y',
		allowInput: true,
		minDate: '01/01/1900',
		maxDate: 'today',
		locale: {
			firstDayOfWeek: 1 // start week on Monday
		}
	})
}
export const datepicker = () => {
	flatpickr('.datepicker', {
		dateFormat: 'd/m/Y',
		allowInput: true,
		locale: {
			firstDayOfWeek: 1 // start week on Monday
		}
	})
}
export const datetimepicker = () => {
	flatpickr('.datetimepicker', {
		enableTime: true,
		dateFormat: 'd/m/Y H:i',
		allowInput: true,
		locale: {
			firstDayOfWeek: 1 // start week on Monday
		}
	})
}
export const timepicker = () => {
	flatpickr('.timepicker', {
		enableTime: true,
		noCalendar: true,
		dateFormat: 'H:i',
		locale: {
			firstDayOfWeek: 1 // start week on Monday
		}
	})
}
export const addrequestdatepicker = () => {
	flatpickr('.addrequestdatepicker', {
		dateFormat: 'd/m/Y',
		allowInput: true,
		maxDate: 'today',
		defaultDate: 'today',
		locale: {
			firstDayOfWeek: 1 // start week on Monday
		}
	})
}
export const requestdatepicker = () => {
	flatpickr('.requestdatepicker', {
		dateFormat: 'd/m/Y',
		allowInput: true,
		defaultDate: 'today',
		locale: {
			firstDayOfWeek: 1 // start week on Monday
		}
	})
}
export const daterangepicker = () => {
	flatpickr('.daterangepicker', {
		dateFormat: 'd/m/Y',
		allowInput: true,
		minDate: '1900-01',
		mode: 'range',
		wrap: true
	})
}
