///*問題文・選択肢・答えを変数で定義していく
const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: 'マイケルジャクソンが初めてムーンウォークを披露した曲といえば?',
        answers: [
            'スリラー',
            'smooth criminal',
            'Imagine',
            'Bilie Jean'
        ],
        correct: 'Bilie Jean'
    }, {
        question: '山本優の血液型は？',
        answers: [
            'A型',
            'B型',
            'O型',
            'AB型'
        ],
        correct: 'B型'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;







const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;


const setUpQuiz = () => {

    //定数の文字列をHTMLに反映させる
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setUpQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setUpQuiz();
    }else{
        window.alert('終了!あなたの正答数は' + score + '/' + quizLength + 'です!');
    }

};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
    //ハンドラーindex
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

