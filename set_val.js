function set_value( obj ) {

        let $this = $(obj);
        let $id = $this.attr('id');
        let $value = $($this).val();

        console.log('this', $this);
        console.log( 'id', $id );
        console.log( 'value', $value );

        $('#'+ $id).val( $value );
    }
