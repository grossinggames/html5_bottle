window.onload = function () {
    // Инициализация вк
//    VK.init(function() {

        // API initialization succeeded
        //console.log('Успеная регстрация вконтакте');

        // Настройки служебные
        SwitchRoom("room_bottle");

        // Массив событий для комнат и интерфейса
        var ticks = [];
        ticks["room_interface"] = new CustomEvent("room_interface");

        // Заполняем ассациативный массив событиями
        for (var i = 0, len = rooms.length; i < len; i++) {
            ticks[ rooms[i] ] = new CustomEvent(rooms[i]);
        };

        var intervalTick = setInterval(function () {
            tmr_global.dispatchEvent(ticks[currentRoom]);
            tmr_global.dispatchEvent(ticks["room_interface"]);
        }, TIME_UPDATE);

        // Анимация после загрузки
        //ObjAnimate("spr_bottle_floor", "alp", 0, 0, function() { }, [ 0,0,0, 0.5,0,1 ]);
        //ObjAnimate("spr_bottle_chat", "alp", 0, 0, function() {}, [ 0,0,0, 0.5,0,1 ]);

        ObjAnimate("spr_bottle_button_change_bottle", "scale_x", 0, 0, function() { }, [ 0,0,1, 0.5,0,1, 0.6,0,1.1, 0.7,0,1 ]);
        ObjAnimate("spr_bottle_button_change_bottle", "scale_y", 0, 0, function() { }, [ 0,0,1, 0.5,0,1, 0.6,0,1.1, 0.7,0,1 ]);

        ObjAnimate("spr_bottle_button_change_table", "scale_x", 0, 0, function() { }, [ 0,0,1, 0.6,0,1, 0.7,0,1.1, 0.9,0,1 ]);
        ObjAnimate("spr_bottle_button_change_table", "scale_y", 0, 0, function() { }, [ 0,0,1, 0.6,0,1, 0.7,0,1.1, 0.9,0,1 ]);

        ObjAnimate("spr_bottle_button_achievements", "scale_x", 0, 0, function() { }, [ 0,0,1, 0.8,0,1, 0.9,0,1.1, 1.0,0,1 ]);
        ObjAnimate("spr_bottle_button_achievements", "scale_y", 0, 0, function() { }, [ 0,0,1, 0.8,0,1, 0.9,0,1.1, 1.0,0,1 ]);

        ObjAnimate("spr_bottle_button_buy", "scale_x", 0, 0, function() { }, [ 0,0,1, 0.9,0,1, 1,0,1.1, 1.1,0,1 ]);
        ObjAnimate("spr_bottle_button_buy", "scale_y", 0, 0, function() { }, [ 0,0,1, 0.9,0,1, 1,0,1.1, 1.1,0,1 ]);

        ObjAnimate("spr_bottle_button_rating", "scale_x", 0, 0, function() { }, [ 0,0,1, 1,0,1, 1.1,0,1.1, 1.2,0,1 ]);
        ObjAnimate("spr_bottle_button_rating", "scale_y", 0, 0, function() { }, [ 0,0,1, 1,0,1, 1.1,0,1.1, 1.2,0,1 ]);

        ObjAnimate("spr_bottle_button_sound", "scale_x", 0, 0, function() { }, [ 0,0,1, 1.1,0,1, 1.2,0,1.1, 1.3,0,1 ]);
        ObjAnimate("spr_bottle_button_sound", "scale_y", 0, 0, function() {
            spr_bottle_chat_field.innerHTML += '<li style="background-color: #bc96dc">Добро пожаловать в Сладкий Поцелуй!</li>';
            //HideModalWindow();
        }, [ 0,0,1, 1.1,0,1, 1.2,0,1.1, 1.3,0,1 ]);

        /*
        var slot1 = ObjGet("spr_bottle_slot_1");
        ObjAnimate("spr_bottle_slot_1", "pos_x", 0, 0, function() {}, [ 0,0,slot1.pos_x, 0.8,0,450, 1.5,0,450, 2.3,0,slot1.pos_x ]);
        ObjAnimate("spr_bottle_slot_1", "pos_y", 0, 0, function() {}, [ 0,0,slot1.pos_y, 0.8,0,230, 1.5,0,230, 2.3,0,slot1.pos_y ]);

        var slot11 = ObjGet("spr_bottle_slot_11");
        ObjAnimate("spr_bottle_slot_11", "pos_x", 0, 0, function() {}, [ 0,0,slot11.pos_x, 0.8,0,210, 1.5,0,210, 2.3,0,slot11.pos_x ]);
        ObjAnimate("spr_bottle_slot_11", "pos_y", 0, 0, function() {}, [ 0,0,slot11.pos_y, 0.8,0,230, 1.5,0,230, 2.3,0,slot11.pos_y ]);
        */

        //ShowModalWindow("spr_interface_modalwindow_change_bottle");

        // Визуальные настройки
        function ButtonEnter(name) {
            var btn = ObjGet(name);
            ObjAnimate(name, "scale_x", 0, 0, function() {}, [ 0,0,btn.scale_x, 0.1,0,1.2, 0.2,0,1.1 ]);
            ObjAnimate(name, "scale_y", 0, 0, function() {}, [ 0,0,btn.scale_y, 0.1,0,1.2, 0.2,0,1.1 ]);
        }

        function ButtonLeave(name) {
            var btn = ObjGet(name);
            ObjAnimate(name, "scale_x", 0, 0, function() {}, [ 0,0,btn.scale_x, 0.1,0,0.8, 0.2,0,1 ]);
            ObjAnimate(name, "scale_y", 0, 0, function() {}, [ 0,0,btn.scale_y, 0.1,0,0.8, 0.2,0,1 ]);
            spr_bottle_sending_input.focus();
        }

        function ButtonDown(name) {
            var btn = ObjGet(name);
            ObjAnimate(name, "scale_x", 0, 0, function() {}, [ 0,0,btn.scale_x, 0.1,0,0.6, 0.2,0,0.8 ]);
            ObjAnimate(name, "scale_y", 0, 0, function() {}, [ 0,0,btn.scale_y, 0.1,0,0.6, 0.2,0,0.8 ]);
            spr_bottle_sending_input.focus();
        }

        function ButtonUp(name) {
            var btn = ObjGet(name);
            ObjAnimate(name, "scale_x", 0, 0, function() {}, [ 0,0,btn.scale_x, 0.1,0,1.2, 0.2,0,1 ]);
            ObjAnimate(name, "scale_y", 0, 0, function() {}, [ 0,0,btn.scale_y, 0.1,0,1.2, 0.2,0,1 ]);
            spr_bottle_sending_input.focus();
        }

        // Установка параметров
        ObjSet("spr_bottle_floor_bottle",
        {
            cursor: "hand",
            event_mdown: function() {

            },
            event_mup: function() {
                var btn = ObjGet("spr_bottle_floor_bottle");
                ObjAnimate("spr_bottle_floor_bottle", "angle", 0, 0, function() {  }, [ 0,0,btn.angle, 1,0,btn.angle + 360 ]);
                spr_bottle_sending_input.focus();
            },
            event_mleave: function() {

            }
        });

        ObjSet("spr_bottle_button_change_bottle_btn",
        {
            cursor: "hand",
            popup: "Поменять бутылку",
            event_mdown: function() {
                ButtonDown("spr_bottle_button_change_bottle");
            },
            event_mup: function() {
                ButtonUp("spr_bottle_button_change_bottle");
                ShowModalWindow("spr_interface_modalwindow_change_bottle");
            },
            event_mleave: function() {
                ButtonLeave("spr_bottle_button_change_bottle");
                ObjSet("spr_bottle_button_change_bottle", { drawoff_x: 0 });
            },
            event_menter: function() {
                ButtonEnter("spr_bottle_button_change_bottle");
                ObjSet("spr_bottle_button_change_bottle", { drawoff_x: -35 });
            }
        });

        ObjSet("spr_interface_modalwindow_change_bottle_close",
        {
            cursor: "hand",
            popup: "Закрыть",
            event_mdown: function() {
                ButtonDown("spr_interface_modalwindow_change_bottle_close");
            },
            event_mup: function() {
                ButtonUp("spr_interface_modalwindow_change_bottle_close");
                HideModalWindow();
            },
            event_mleave: function() {
                ButtonLeave("spr_interface_modalwindow_change_bottle_close");
            },
            event_menter: function() {
                ButtonEnter("spr_interface_modalwindow_change_bottle_close");
            }
        });

        ObjSet("spr_bottle_button_change_table_btn",
        {
            cursor: "hand",
            popup: "Сменить стол",
            event_mdown: function() {
                ButtonDown("spr_bottle_button_change_table");
            },
            event_mup: function() {
                ButtonUp("spr_bottle_button_change_table");
                ShowModalWindow("spr_interface_modalwindow_change_table");
            },
            event_mleave: function() {
                ButtonLeave("spr_bottle_button_change_table");
                ObjSet("spr_bottle_button_change_table", { drawoff_x: 0 });
            },
            event_menter: function() {
                ButtonEnter("spr_bottle_button_change_table");
                ObjSet("spr_bottle_button_change_table", { drawoff_x: -35 });
            }
        });

        ObjSet("spr_interface_modalwindow_change_table_close",
        {
            cursor: "hand",
            popup: "Закрыть",
            event_mdown: function() {
                ButtonDown("spr_interface_modalwindow_change_table_close");
            },
            event_mup: function() {
                ButtonUp("spr_interface_modalwindow_change_table_close");
                HideModalWindow();
            },
            event_mleave: function() {
                ButtonLeave("spr_interface_modalwindow_change_table_close");
            },
            event_menter: function() {
                ButtonEnter("spr_interface_modalwindow_change_table_close");
            }
        });

        ObjSet("spr_bottle_button_achievements_btn",
        {
            cursor: "hand",
            popup: "Достижения",
            event_mdown: function() {
                ButtonDown("spr_bottle_button_achievements");
            },
            event_mup: function() {
                ButtonUp("spr_bottle_button_achievements");
                ShowModalWindow("spr_interface_modalwindow_achievements");
            },
            event_mleave: function() {
                ButtonLeave("spr_bottle_button_achievements");
                ObjSet("spr_bottle_button_achievements", { drawoff_x: 0 });
            },
            event_menter: function() {
                ButtonEnter("spr_bottle_button_achievements");
                ObjSet("spr_bottle_button_achievements", { drawoff_x: -35 });
            }
        });

        ObjSet("spr_interface_modalwindow_achievements_close",
        {
            cursor: "hand",
            popup: "Закрыть",
            event_mdown: function() {
                ButtonDown("spr_interface_modalwindow_achievements_close");
            },
            event_mup: function() {
                ButtonUp("spr_interface_modalwindow_achievements_close");
                HideModalWindow();
            },
            event_mleave: function() {
                ButtonLeave("spr_interface_modalwindow_achievements_close");
            },
            event_menter: function() {
                ButtonEnter("spr_interface_modalwindow_achievements_close");
            }
        });

        ObjSet("spr_bottle_button_buy_btn",
        {
            cursor: "hand",
            popup: "Купить сердечки",
            event_mdown: function() {
                ButtonDown("spr_bottle_button_buy");
            },
            event_mup: function() {
                ButtonUp("spr_bottle_button_buy");
                ShowModalWindow("spr_interface_modalwindow_buy");
            },
            event_mleave: function() {
                ButtonLeave("spr_bottle_button_buy");
                ObjSet("spr_bottle_button_buy", { drawoff_x: 0 });
            },
            event_menter: function() {
                ButtonEnter("spr_bottle_button_buy");
                ObjSet("spr_bottle_button_buy", { drawoff_x: -42 });
            }
        });

        ObjSet("spr_interface_modalwindow_buy_close",
        {
            cursor: "hand",
            popup: "Закрыть",
            event_mdown: function() {
                ButtonDown("spr_interface_modalwindow_buy_close");
            },
            event_mup: function() {
                ButtonUp("spr_interface_modalwindow_buy_close");
                HideModalWindow();
            },
            event_mleave: function() {
                ButtonLeave("spr_interface_modalwindow_buy_close");
            },
            event_menter: function() {
                ButtonEnter("spr_interface_modalwindow_buy_close");
            }
        });

        ObjSet("spr_bottle_button_rating_btn",
        {
            cursor: "hand",
            popup: "Рейтинг игроков",
            event_mdown: function() {
                ButtonDown("spr_bottle_button_rating");
            },
            event_mup: function() {
                ButtonUp("spr_bottle_button_rating");
                ShowModalWindow("spr_interface_modalwindow_rating");
            },
            event_mleave: function() {
                ButtonLeave("spr_bottle_button_rating");
                ObjSet("spr_bottle_button_rating", { drawoff_x: 0 });
            },
            event_menter: function() {
                ButtonEnter("spr_bottle_button_rating");
                ObjSet("spr_bottle_button_rating", { drawoff_x: -35 });
            }
        });

        ObjSet("spr_interface_modalwindow_rating_close",
        {
            cursor: "hand",
            popup: "Закрыть",
            event_mdown: function() {
                ButtonDown("spr_interface_modalwindow_rating_close");
            },
            event_mup: function() {
                ButtonUp("spr_interface_modalwindow_rating_close");
                HideModalWindow();
            },
            event_mleave: function() {
                ButtonLeave("spr_interface_modalwindow_rating_close");
            },
            event_menter: function() {
                ButtonEnter("spr_interface_modalwindow_rating_close");
            }
        });

        ObjSet("spr_bottle_button_sound_btn",
        {
            cursor: "hand",
            popup: "Управление звуками",
            event_mdown: function() {
                ButtonDown("spr_bottle_button_sound");
            },
            event_mup: function() {
                ButtonUp("spr_bottle_button_sound");
            },
            event_mleave: function() {
                ButtonLeave("spr_bottle_button_sound");
                ObjSet("spr_bottle_button_sound", { drawoff_x: 0 });
            },
            event_menter: function() {
                ButtonEnter("spr_bottle_button_sound");
                ObjSet("spr_bottle_button_sound", { drawoff_x: -35 });
            }
        });

        function SendMessage() {
            var msg = spr_bottle_sending_input.value;

            if (msg != "") {
                spr_bottle_chat_field.innerHTML += "<li>" + msg + "</li>";
                spr_bottle_sending_input.value = "";
                spr_bottle_chat_field.scrollTop = spr_bottle_chat_field.scrollHeight;
                spr_bottle_sending_input.focus();
            }
        }

        ObjSet("spr_bottle_sending_send",
        {
            cursor: "hand",
            popup: "Отправить сообщение",
            event_mdown: function() {
                //ButtonDown("spr_bottle_sending_send");
            },
            event_mup: function() {
                SendMessage();
                //spr_bottle_sending_input.scrollTop =  spr_bottle_sending_input.scrollHeight;
                //ButtonUp("spr_bottle_sending_send");
            },
            event_mleave: function() {
                //ButtonLeave("spr_bottle_sending_send");
            },
            event_menter: function() {
                //ButtonEnter("spr_bottle_sending_send");
            }
        });

        // Отпавить сообщение на Enter
        spr_bottle_sending_input.onkeydown = function (e) {
            if (e.keyCode == 13) {
                SendMessage();
            }
        };


        ObjSet("spr_bottle_sending_input",
        {
            popup: "Написать сообщение",
        });



    // ********************************************** Позиции **********************************************
    // Настройки слотов
    var slotPositions = [
        { defPos: [33,  77],  angle: 18 },  // 0
        { defPos: [53,  492], angle: 41 },  // 1
        { defPos: [208, 577], angle: 77 },  // 2
        { defPos: [362, 577], angle: 110 }, // 3
        { defPos: [448, 477], angle: 135 }, // 4
        { defPos: [469, 358], angle: 165 }, // 5
        { defPos: [469, 243], angle: 200 }, // 6
        { defPos: [448, 128], angle: 224 }, // 7
        { defPos: [293, 43],  angle: 262 }, // 8
        { defPos: [139, 43],  angle: 297 }, // 9
        { defPos: [54,  147], angle: 322 }, // 10
        { defPos: [32,  262], angle: 350 }  // 11
    ];

//    }, function() {
        // API initialization failed
//        console.log('Ошибка инициализации');
//    }, '5.42');
};