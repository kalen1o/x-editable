$('body').on('click', '[editable]', function(event) {
	event.preventDefault(); //отмена дефолтного действия

	var type = $(this).attr('editable'),
		$element = $(this);

	$('<input>')
		.insertAfter($element) //создаем после
		.attr('type', type) 
		.val($element.text()) //даем форме значение
		.focus() //сразу фокусирует мышку на форме
		.select() //сразу выбирает все значение формы
		.on('keyup', function(event) {
			if(event.which === 13) { //Enter
				$element
					.insertAfter(this)
					.text( $(this).val() );

				$(this).remove();
			} else if(event.which === 27) { //ESC
				$(this).trigger('blur'); //вызывает BLUR
			}	
		})
		.on('blur', function() {
			$element.insertAfter(this);

			$(this).remove(); //Удаляет
		});

	$element.remove();
});

console.log('hello');