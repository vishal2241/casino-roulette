angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $stateParams, $timeout, Service) {
    $timeout(function () {

      var oMain = new CMain({
        money: 1000, //STARING CREDIT FOR THE USER
        min_bet: 0.1, //MINIMUM BET
        max_bet: 1000, //MAXIMUM BET
        time_bet: 0, //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
        time_winner: 1500, //TIME FOR WINNER SHOWING IN MILLISECONDS    
        win_occurrence: 30, //Win occurrence percentage (100 = always win). 
        //SET THIS VALUE TO -1 IF YOU WANT WIN OCCURRENCE STRICTLY RELATED TO PLAYER BET ( SEE DOCUMENTATION)
        casino_cash: 1000, //The starting casino cash that is recharged by the money lost by the user
        fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT 
        show_credits: true, //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
        num_hand_before_ads: 10 //NUMBER OF HANDS PLAYED BEFORE AD SHOWN
        //
      });
      // $scope.getMemberData = function (accessToken) {
      //   Service.memberData(accessToken, function (response) {
      //     if (response.value) {
      //       $scope.oMain = {};
      //       oMain.money = response.data.credit;
      //       oMain.min_bet = 0.1;
      //       oMain.max_bet = response.data.creditLimit; //MAXIMUM BET
      //       oMain.time_bet = 0; //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
      //       oMain.time_winner = 1500; //TIME FOR WINNER SHOWING IN MILLISECONDS    
      //       oMain.win_occurrence = 30; //Win occurrence percentage (100 = always win). 
      //       //SET THIS VALUE TO -1 IF YOU WANT WIN OCCURRENCE STRICTLY RELATED TO PLAYER BET ( SEE DOCUMENTATION)
      //       oMain.casino_cash = 1000; //The starting casino cash that is recharged by the money lost by the user
      //       oMain.fullscreen = true; //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
      //       oMain.check_orientation = true; //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT 
      //       oMain.show_credits = true; //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
      //       oMain.num_hand_before_ads = 10; //NUMBER OF HANDS PLAYED BEFORE AD SHOWN
      //     } else {
      //       $scope.oMain = {};
      //       oMain.money = 0;
      //       oMain.min_bet = 0;
      //       oMain.max_bet = 0; //MAXIMUM BET
      //       oMain.time_bet = 0; //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
      //       oMain.time_winner = 1500; //TIME FOR WINNER SHOWING IN MILLISECONDS    
      //       oMain.win_occurrence = 30; //Win occurrence percentage (100 = always win). 
      //       //SET THIS VALUE TO -1 IF YOU WANT WIN OCCURRENCE STRICTLY RELATED TO PLAYER BET ( SEE DOCUMENTATION)
      //       oMain.casino_cash = 1000; //The starting casino cash that is recharged by the money lost by the user
      //       oMain.fullscreen = true; //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
      //       oMain.check_orientation = true; //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT 
      //       oMain.show_credits = true; //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
      //       oMain.num_hand_before_ads = 10; //NUMBER OF HANDS PLAYED BEFORE AD SHOWN
      //     }
      //   });
      // };

      // var oMain = new CMain({
      //   money: 1000, //STARING CREDIT FOR THE USER
      //   min_bet: 0.1, //MINIMUM BET
      //   max_bet: 1000, //MAXIMUM BET
      //   time_bet: 0, //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
      //   time_winner: 1500, //TIME FOR WINNER SHOWING IN MILLISECONDS    
      //   win_occurrence: 30, //Win occurrence percentage (100 = always win). 
      //   //SET THIS VALUE TO -1 IF YOU WANT WIN OCCURRENCE STRICTLY RELATED TO PLAYER BET ( SEE DOCUMENTATION)
      //   casino_cash: 1000, //The starting casino cash that is recharged by the money lost by the user
      //   fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
      //   check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT 
      //   show_credits: true, //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
      //   num_hand_before_ads: 10 //NUMBER OF HANDS PLAYED BEFORE AD SHOWN
      //   //
      //   //// THIS FUNCTIONALITY IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN.///////////////////////////
      //   /////////////////// YOU CAN GET IT AT: /////////////////////////////////////////////////////////
      //   // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421 ///////////
      // });


      $(scope.oMain).on("recharge", function (evt) {
        //alert("recharge");
      });

      $(scope.oMain).on("start_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
          parent.__ctlArcadeStartSession();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
      });

      $(scope.oMain).on("end_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
          parent.__ctlArcadeEndSession();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
      });

      $(scope.oMain).on("bet_placed", function (evt, iTotBet) {
        //...ADD YOUR CODE HERE EVENTUALLY
      });

      $(scope.oMain).on("save_score", function (evt, iMoney) {

        if (getParamValue('ctl-arcade') === "true") {
          parent.__ctlArcadeSaveScore({
            score: iMoney
          });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
      });

      $(scope.oMain).on("show_interlevel_ad", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
          parent.__ctlArcadeShowInterlevelAD();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
      });

      $(scope.oMain).on("share_event", function (evt, iMoney) {
        if (getParamValue('ctl-arcade') === "true") {
          parent.__ctlArcadeShareEvent({
            img: "200x200.jpg",
            title: TEXT_CONGRATULATIONS,
            msg: TEXT_SHARE_1 + iMoney + TEXT_SHARE_2,
            msg_share: TEXT_SHARE_3 + iMoney + TEXT_SHARE_4
          });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
      });

      if (isIOS()) {
        setTimeout(function () {
          sizeHandler();
        }, 200);
      } else {
        sizeHandler();
      };

    }, 5000);

    if (s_bIsIphone) {
      canvas = document.getElementById('canvas');
      s_oStage.canvas.width = destW * 2;
      s_oStage.canvas.height = destH * 2;
      canvas.style.width = destW + "px";
      canvas.style.height = destH + "px";
      var iScale = Math.min(destW / CANVAS_WIDTH, destH / CANVAS_HEIGHT);
      s_iScaleFactor = iScale * 2;
      s_oStage.scaleX = s_oStage.scaleY = iScale * 2;
    } else if (s_bMobile && isIOS() === false) {
      $("#canvas").css("width", destW + "px");
      $("#canvas").css("height", destH + "px");
    } else {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", s_oStage);
      s_oStage.canvas.width = destW;
      s_oStage.canvas.height = destH;

      s_iScaleFactor = Math.min(destW / CANVAS_WIDTH, destH / CANVAS_HEIGHT);
      s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor;
    }

    if (fOffsetY < 0) {
      $("#canvas").css("top", fOffsetY + "px");
      s_iCanvasOffsetHeight = fOffsetY;
    } else {
      $("#canvas").css("top", "0px");
      s_iCanvasOffsetHeight = 0;
    }

  });
