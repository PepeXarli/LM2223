/* Escribe aquí el código Javascript necesario para el ejercicio */
$(document).ready(function () {


    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        minDate:'+1D',
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['es']);
    $(function() {
        $("#ida").datepicker();
        $("#vuelta").datepicker();
        
    });

    $('#ida, #vuelta').datepicker({
        minDate: new Date(),
      });
      
      $(document).on('change', '#ida', (event) => {
          const element = event.target;
          console.log(element.value);
          $('#vuelta').datepicker('option', 'minDate', element.value);
      });


      $(function() {
        enable_cb();
        $("#idayvuelta").click(enable_cb);
      });
      
      function enable_cb() {
        if (this.checked) {
          $("#vuelta").removeAttr("disabled");
        } else {
          $("#vuelta").attr("disabled", true);
        }
      }
  

      $('button').click(function(e){
        e.preventDefault();
       /* let localizador='';
        function generarRandom(num) {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const charactersLength = characters.length;
            let result = "";
              for (let i = 0; i < num; i++) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
          
            localizador=result;
          }*/

        let nombre=$('#name').val();
        let apellidos=$('#surname').val();
        let email=$('#email').val();
        let dni=$('#dni').val();
        let ida=$('#ida').val();
        let vuelta=$('#vuelta').val();

        if(nombre==''||apellidos==''||email==''||dni==''||ida==''){
            alert('Llene todos los campos');
        }else if($('#idayvuelta').is(':checked') & vuelta==''){

            alert('Llene todos los campos');
            
        }
        else{
            
            let url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=<p>Nombre: ${nombre}</p>
            <p>Apellidos: ${apellidos}</p>
            <p>Email: ${email}</p>
            <p>DNI: ${dni}</p>
            <p>Ida: ${ida}</p>
            <p>Vuelta: ${vuelta}</p>
            <p>Localizador: ${genRandonString(12)}</p>`;
    
            function genRandonString(length) {
                var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var charLength = chars.length;
                var result = '';
                for ( var i = 0; i < length; i++ ) {
                   result += chars.charAt(Math.floor(Math.random() * charLength));
                }
                return result;
             }
              
             console.log(genRandonString(12));
           
    
            $('#resumen').html(
                `
                <p>Nombre: ${nombre}</p>
                <p>Apellidos: ${apellidos}</p>
                <p>Email: ${email}</p>
                <p>DNI: ${dni}</p>
                <p>Ida: ${ida}</p>
                <p>Vuelta: ${vuelta}</p>
                <p>Localizador: ${genRandonString(12)}</p>
    
                <img src="${url}">
            `
            )

      }
        }

        
    
    )});

