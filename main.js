$(function () {

    // 変数定義
    let msec = 0; //0.1秒
    let sec = 0; //秒
    let min = 0; //分
    let hour = 0; //時間
  

    // スタートボタン実行

    $('#start').click(
        function(){
            let countUp = setInterval(()=> {
              
                //CountUp            
                
                msec ++;
                
                // msec(0.1秒)が９秒台を超えたと同時に、変数sec(秒)に１加算
                if (msec > 9) {
                  msec = 0; 
                  sec ++;
                }
                
                // sec(秒)が59秒台を超えたと同時に、変数min(分)に１加算
                if (sec > 59) {
                  sec = 0;
                  min ++;
                }

                // min(分)が59分台を超えたと同時に、変数hour(時間)に１加算
                if(min > 59){
                    min = 0;
                    hour ++;
                }
            
                //各単位、一桁台の時にも十の位に０を表示させる　(msecは二桁になることがないので適用しない)
                //sliceを使用して、二桁以上の数字は取得しないようにする(二桁台に突入した際、０を表示させなくさせる)  

                sec_number = ('0' + sec).slice(-2);
                min_number = ('0' + min).slice(-2);
                hour_number = ('0' + hour).slice(-2);
                
                // 時間表示
                $('#timer').html(hour_number + '時間' +  min_number + '分' + sec_number + '秒' + msec);
                

              }, 100);　//この一連の動作を100msごとに行う


              //デフォルトで、ストップとリスタートボタンはdisabled済
              // スタート実行後、スタートボタン機能を停止させ,ストップボタン機能開始
              $(this).prop("disabled", true);
              $('#stop').prop("disabled", false);


              // ストップボタン実行

               $('#stop').click(function(){
                 clearInterval(countUp);//14行目変数countUpのスコープ内に記述　
                 $(this).prop("disabled", true);//ストップボタン機能停止
                 $('#reset').prop("disabled", false);//リセットバタン機能開始
                });

              });  


              //リセットボタン実行
              
             $('#reset').click(function(){

              msec = 0; //初期化
              sec = 0; //初期化
              min = 0; //初期化
              hour = 0; //初期化

             $('#timer').html('00時間00分00秒0');//文字リセット
             $('#start').prop("disabled", false);//スタートボタン停止解除
            $('#reset').prop("disabled", true);//リセットボタン機能停止

             });
});


