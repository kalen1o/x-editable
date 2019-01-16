$('body').on('click', '[editable]', function(event) {
	event.preventDefault(); //отмена дефолтного действия

	var type = $(this).attr('editable'),
		$element = $(this);

	var $input = $('<input>')
		.insertAfter($element) //создаем после
		.attr('type', type) 
		.val($element.text()) //даем форме значение
		.focus() //сразу фокусирует мышку на форме
		.select() //сразу выбирает все значение формы
		.on('keyup', function(event) {
			if(event.which === 13) { //Enter
				$ok.trigger('click');
			} else if(event.which === 27) { //ESC
				//$(this).trigger('blur'); //вызывает BLUR
				$cancel.trigger('click');
			}	
		});

	var $ok = $('<button>')
					.insertAfter($input)
					.attr('class', 'btn btn-primary')
					.on('click', function(event) {
						$element
							.insertAfter(this)
							.text( $input.val() );
						$input.remove();
						$cancel.remove();
						$(this).remove();
					});

	$('<span>')
		.appendTo($ok)
		.attr({'class': 'glyphicon glyphicon-ok', 'aria-hidden': 'true'});

	var $cancel = $('<button>')
					.insertAfter($ok)
					.attr('class', 'btn btn-default')
					.on('click', function(event) {
						$element.insertAfter(this);
						$input.remove();
						$ok.remove();
						$(this).remove();
					});

	$('<span>')
		.appendTo($cancel)
		.attr({'class': 'glyphicon glyphicon-remove', 'aria-hidden': 'true'});

	$('body').on('mousedown', function(event) {
		console.log('mousedown')
		$cancel.trigger('click');
		$(this).off('mousedown');
	})
	
		$element.remove();
});