import {ChatUx} from 'chatux';

const chatux = new ChatUx();

const opt = {
    api: {
        endpoint: 'http://localhost:8080/chat',
        method: 'GET',                         
        dataType: 'json'                       
    },
    bot: {
        wakeupText: "hi",
        botPhoto: 'data:image/png;base64,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',
        humanPhoto: null,
        widget: {
            sendLabel: 'SEND',
            placeHolder: 'Say something'
        }
    },
    window: {
        title: 'Cloud Counselage ChatBot!!! Talk to me',
        infoUrl: null,
        size: {
            width: 600,
            height: 500,
            minWidth: 300,
            minHeight: 300,
            titleHeight: 50
        },
        appearance: {
            border: {
                shadow: '4px 4px 6px  rgba(0, 0, 0, 0.5)',
                width: 3,
                radius: 7
            },
            titleBar: {
                fontSize: 18,
                color: 'white',
                background: 'indigo',
                leftMargin: 40,
                height: 40,
                buttonWidth: 36,
                buttonHeight: 16,
                buttonColor: 'yellow',

                buttons: [
                    {
                        fa: 'fas fa-times',
                        name: 'hideButton',
                        visible: true
                    }
                ],
                buttonsOnLeft: [
                    {
                        fa: 'fas fa-comment-alt',
                        name: 'info',
                        visible: true
                    }
                ],
            },
        }
    }
};

//initialize
chatux.init(opt);

const isAutoOpenWindow=true;
chatux.start(isAutoOpenWindow);
