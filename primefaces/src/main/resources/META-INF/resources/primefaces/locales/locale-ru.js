/**Russian */
PrimeFaces.locales['ru'] = {
    "startsWith": "Начинается с",
    "contains": "Содержит",
    "notContains": "Не содержит",
    "endsWith": "Заканчивается",
    "equals": "Равно",
    "notEquals": "Не равно",
    "noFilter": "Нет фильтра",
    "filter": "Фильтр",
    "lt": "Меньше чем",
    "lte": "Меньше чем или равно",
    "gt": "Более чем",
    "gte": "Более чем или равно",
    "dateIs": "Дата равна",
    "dateIsNot": "Дата не равна",
    "dateBefore": "Дата до",
    "dateAfter": "Дата после",
    "custom": "Пользовательский",
    "clear": "Очистить",
    "apply": "Принять",
    "matchAll": "Сопоставить все",
    "matchAny": "Совпадение с любым",
    "addRule": "Добавить правило",
    "removeRule": "Удалить правило",
    "accept": "Да",
    "reject": "Нет",
    "choose": "Выбрать",
    "upload": "Загрузить",
    "cancel": "Отмена",
    "completed": "Завершено",
    "pending": "В ожидании",
    "dayNames": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    "dayNamesShort": ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
    "dayNamesMin": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    "monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    "monthNamesShort": ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    "chooseYear": "Выбрать год",
    "chooseMonth": "Выбрать месяц",
    "chooseDate": "Выбрать дату",
    "prevDecade": "Предыдущее десятилетие",
    "nextDecade": "Следующее десятилетие",
    "prevYear": "Предыдущий год",
    "nextYear": "Следующий год",
    "prevMonth": "Предыдущий месяц",
    "nextMonth": "Следующий месяц",
    "prevHour": "Предыдущий час",
    "nextHour": "Следующий час",
    "prevMinute": "Предыдущая минута",
    "nextMinute": "Следующая минута",
    "prevSecond": "Предыдущая секунда",
    "nextSecond": "Следующая секунда",
    "am": "до полудня",
    "pm": "после полудня",
    "today": "Сегодня",
    "weekHeader": "Нед.",
    "firstDayOfWeek": 1,
    "showMonthAfterYear": false,
    "dateFormat": "dd.mm.yyyy",
    "weak": "Простой",
    "medium": "Нормальный",
    "strong": "Хороший",
    "passwordPrompt": "Введите пароль",
    "emptyFilterMessage": "Результатов не найдено",
    "searchMessage": "{0} результатов доступно",
    "selectionMessage": "{0} элементов выбрано",
    "emptySelectionMessage": "Нет выбранного элемента",
    "emptySearchMessage": "Результатов не найдено",
    "emptyMessage": "Нет доступных вариантов",
    "aria": {
        "trueLabel": "Верно",
        "falseLabel": "Неверно",
        "nullLabel": "Не выбран",
        "star": "1 звезда",
        "stars": "{star} звёзд",
        "selectAll": "Выбраны все элементы",
        "unselectAll": "Все элементы не выбраны",
        "close": "Закрыть",
        "previous": "Предыдущий",
        "next": "Следующий",
        "navigation": "Навигация",
        "scrollTop": "Прокрутить в начало",
        "moveTop": "Переместить в начало",
        "moveUp": "Переместить вверх",
        "moveDown": "Переместить вниз",
        "moveBottom": "Переместить в конец",
        "moveToTarget": "Переместить в приёмник",
        "moveToSource": "Переместить в источник",
        "moveAllToTarget": "Переместить всё в приёмник",
        "moveAllToSource": "Переместить всё в источник",
        "pageLabel": "страница {page}",
        "firstPageLabel": "Первая страница",
        "lastPageLabel": "Последняя страница",
        "nextPageLabel": "Следующая страница",
        "previousPageLabel": "Предыдущая страница",
        "rowsPerPageLabel": "Строк на странице",
        "jumpToPageDropdownLabel": "Перейти к раскрывающемуся списку страниц",
        "jumpToPageInputLabel": "Перейти к вводу страницы",
        "selectRow": "Выбрана строка",
        "unselectRow": "Строка не выбрана",
        "expandRow": "Строка развёрнута",
        "collapseRow": "Строка свёрнута",
        "showFilterMenu": "Показать меню фильтра",
        "hideFilterMenu": "Скрыть меню фильтра",
        "filterOperator": "Оператор фильтра",
        "filterConstraint": "Ограничение фильтра",
        "editRow": "Редактирование строки",
        "saveEdit": "Сохранить правку",
        "cancelEdit": "Отменить правку",
        "listView": "В виде списка",
        "gridView": "В виде сетки",
        "slide": "Слайд",
        "slideNumber": "{slideNumber}",
        "zoomImage": "Увеличить изображение",
        "zoomIn": "Увеличить",
        "zoomOut": "Уменьшить",
        "rotateRight": "Повернуть вправо",
        "rotateLeft": "Повернуть влево"
    }
};

 // custom PF labels
PrimeFaces.locales['ru'] = $.extend(true, {}, PrimeFaces.locales['ru'], {
    weekNumberTitle: 'Н',
    isRTL: false,
    yearSuffix: '',
    timeOnlyTitle: 'Только время',
    timeText: 'Время',
    hourText: 'Час',
    minuteText: 'Минута',
    secondText: 'Секунда',
    millisecondText: 'Миллисекунда',
    month: 'Месяц',
    week: 'Неделя',
    day: 'День',
    list: 'Содержание',
    allDayText: 'Весь день',
    moreLinkText: 'Ещё...',
    noEventsText: 'Ничего нет',
    aria: {
        'datatable.sort.ASC': 'Сортировка столбца по возрастанию',
        'datatable.sort.DESC': 'Сортировка столбца по убыванию',
        'colorpicker.OPEN': 'Открыть выбор цвета',
        'colorpicker.CLOSE': 'Закрыть выбор цвета',
        'colorpicker.CLEAR': 'Очистить выбранный цвет',
        'colorpicker.MARKER': 'Насыщенность: {s}. Яркость: {v}.',
        'colorpicker.HUESLIDER': 'Ползунок оттенка',
        'colorpicker.ALPHASLIDER': 'Ползунок непрозрачности',
        'colorpicker.INPUT': 'Значения цвета',
        'colorpicker.FORMAT': 'Формат цвета',
        'colorpicker.SWATCH': 'Образец цвета',
        'colorpicker.INSTRUCTION': 'Селектор насыщенности и яркости. Для выбора используйте клавиши со стрелками вверх, вниз, влево и вправо',
        'spinner.INCREASE': 'Увеличение стоимости',
        'spinner.DECREASE': 'Уменьшение стоимости',
        'switch.ON': 'На',
        'switch.OFF': 'С сайта',
        'messages.ERROR': 'Ошибка',
        'messages.FATAL': 'Фатальная Ошибка',
        'messages.INFO': 'Информация',
        'messages.WARN': 'Предупреждение'
    },
    messages: { //Опционально для стороны клиента
        'javax.faces.component.UIInput.REQUIRED': '{0}: Ошибка проверки: Требуется значение.',
        'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' значение должно быть числом, состоящим из одной или нескольких цифр.',
        'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' значение должно быть числом между -2147483648 и 2147483647. Пример: {1}.',
        'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' значение должно быть числом, состоящим из одной или нескольких цифр.',
        'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' значение должно быть числом между 4.9E-324 и 1.7976931348623157E308. Пример: {1}.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' значение должно быть десятичным числом.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' значение должно быть десятичным числом, состоящим из одной или нескольких цифр, которое может иметь десятичную часть. Пример: {1}.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' значение должно быть числом, состоящим из одной или нескольких цифр.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' значение должно быть числом, состоящим из одной или нескольких цифр. Пример: {1}.',
        'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' значение должно быть числом между 0 и 255.',
        'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' значение должно быть числом между 0 и 255. Пример: {1}.',
        'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' значение должно быть символом.',
        'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' значение должно быть символом ASCII кода.',
        'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' значение должно быть числом, состоящим из одной или нескольких цифр.',
        'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' значение должно быть числом между -32768 и 32767. Пример: {1}.',
        'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' значение должно быть \'true\' или \'false\'.',
        'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' значение должно быть \'true\' или \'false\'.  Значение не относящееся к \'true\' будет предопределено к \'false\'.',
        'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: Ошибка проверки: Значение больше допустимого максимума \'{0}\'.',
        'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: Ошибка проверки: Значение меньше допустимого минимума \'{0}\'.',
        'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: Ошибка проверки: указанный атрибут не находится между ожидаемыми значениями {0} и {1}.',
        'javax.faces.validator.LongRangeValidator.TYPE': '{0}: Ошибка проверки: Значение неправильного типа.',
        'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: Ошибка проверки: Значение больше допустимого максимума \'{0}\'.',
        'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: Ошибка проверки: Значение меньше допустимого минимума \'{0}\'.',
        'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: Ошибка проверки: указанный атрибут не находится между ожидаемыми значениями {0} и {1}.',
        'javax.faces.validator.DoubleRangeValidator.TYPE': '{0}: Ошибка проверки: Значение неправильного типа.',
        'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' значение должно быть числом, состоящим из одной или нескольких цифр.',
        'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' значение должно быть числом между 1.4E-45 и 3.4028235E38  Пример: {1}.',
        'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' значение не является типом Date.',
        'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' значение не является типом Date. Пример: {1}.',
        'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' значение не является типом Time.',
        'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' значение не является типом Time. Пример: {1}.',
        'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' значение не является типом Date и Time.',
        'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' значение не является типом Date и Time. Пример: {1}.',
        'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: Атрибут \'pattern\' или \'type\' должен быть указан для преобразования значения \'{0}\'.',
        'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' значение не является типом Currency.',
        'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' значение не является типом Currency. Пример: {1}.',
        'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' значение не является типом Percentage.',
        'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' значение не является типом Percentage. Пример: {1}.',
        'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' значение не является типом Number.',
        'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' значение не является типом Number. Пример: {1}.',
        'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' значение не является моделью типа Number.',
        'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' значение не является моделью типа Number. Пример: {1}.',
        'javax.faces.validator.LengthValidator.MINIMUM': '{1}: Ошибка проверки: Значение меньше допустимого минимума \'{0}\'.',
        'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: Ошибка проверки: Значение больше допустимого максимума \'{0}\'.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': 'Образец регулярного выражения должен быть установлен.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': 'Образец регулярного выражения должен иметь непустое значение.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED': 'Образец регулярного выражения не найден.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': 'Образец регулярного выражения \'{0}\' не найден.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': 'Ошибка в регулярном выражении.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': 'Ошибка в регулярном выражении, \'{0}\'.',
        //Опционально для стороны клиента 
        'javax.faces.validator.BeanValidator.MESSAGE': '{0}',
        'javax.validation.constraints.AssertFalse.message': 'Значение должно быть false.',
        'javax.validation.constraints.AssertTrue.message': 'Значение должно быть true.',
        'javax.validation.constraints.DecimalMax.message': 'Значение должно быть меньше или равно {0}.',
        'javax.validation.constraints.DecimalMin.message': 'Значение должно быть больше или равно  {0}.',
        'javax.validation.constraints.Digits.message': 'Числовое значение находится за пределами допустимого диапозона (&lt;{0} digits&gt;.&lt;{1} digits&gt;).',
        'javax.validation.constraints.Future.message': 'Должно быть в дальнейшем.',
        'javax.validation.constraints.Max.message': 'Значение должно быть меньше или равно{0}.',
        'javax.validation.constraints.Min.message': 'Значение должно быть больше или равно {0}.',
        'javax.validation.constraints.NotNull.message': 'Не должно быть null.',
        'javax.validation.constraints.Null.message': 'Должно быть null.',
        'javax.validation.constraints.Past.message': 'Должно быть в дальнейшем.',
        'javax.validation.constraints.Pattern.message': 'Должно соответствовать "{0}".',
        'javax.validation.constraints.Size.message': 'Размер значения должен быть между  {0} и{1}.'
    }
});