$(function() {
    $('.date-button__to').on('click', function() {
        $('.datepicker-group__to').datepicker('show');
    });

    $('.date-button__from').on('click', function() {
        $('.datepicker-group__from').datepicker('show');
    });

    $('.icon-plus').on('click', function() {
        $(this).closest('.datepicker-form').find('.datepicker-input').val('');
    });

    $('.datepicker-group').datepicker({
        autoclose: true,
        format: 'mm_dd_yyyy'
    });
});
