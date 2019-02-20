export function getOption(listaPagamentos){
    var arraySensorDataData = [];
    var arraySensorDataValues = [];
    var mediaSensorData = [];
    var aux = 0;
 
    aux = 0
      for(var i=0 ; i<8 ; i++){
   
    // $("divSensorDataData").each(function () {
        arraySensorDataData[i] = listaPagamentos[i].date
        // $(this).attr('arData');
        // aux++;
    }
    aux = 0;
    for(var i=0 ; i<8 ; i++){
    // $('divSensorDataValue').each(function () {
        arraySensorDataValues[aux] = listaPagamentos[i].value
        // $(this).attr('arValue');
        mediaSensorData[aux] =  listaPagamentos[i].value
        // $(this).attr('media');
        aux++;
    // });
    }
   

    return(

            {
            title: {
                show: true,
                textStyle: {
                },
                text: "Média das medidas",
                left: '20px'
            
            },
    


            xAxis: {
                name: 'Data',
                type: 'category',
                data: arraySensorDataData,
            },
            yAxis: {
                name: 'Valor',
                type: 'value'
            },
            dataZoom: {
                
                show: true,
                id: 'dataZoomX',
                type: 'slider',
                filterMode: 'filter',
            
            },
            series: [{
                name: 'Valor',
                data: arraySensorDataValues,
                type: 'bar'
            },
                {
                    name: 'Média',
                    type: 'line',
                    data: mediaSensorData,
                }],
            tooltip: {
                trigger: 'axis',
                
                axisPointer: {

                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    }
                }
            }, legend: {
                left: 'center',
                data: ['Valor', 'Média'] //Remover o "DESATIVADO" para ativar
            },
            toolbox: {
                left: '950px',

                show: true,
                feature: {
                    saveAsImage: { title: "Baixar" }

                }
            }, grid: {
                bottom: 80
            },
            
        }
    );
}