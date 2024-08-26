document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    document.getElementById("submitAnswer").addEventListener("click", () => {
        checkAnswer();
        answerSubmitted = true;
        document.getElementById("nextQuestion").classList.remove("hidden");
    });
    document.getElementById("hintButton").addEventListener("click", showHint);
    document.getElementById("nextQuestion").addEventListener("click", () => {
        if (answerSubmitted) {
            nextQuestion();
            answerSubmitted = false;
            document.getElementById("nextQuestion").classList.add("hidden");
        }
    });
    document.getElementById("closeModal").addEventListener("click", closeModal);
});

const castles = []; // 城のリストを動的に取得
let currentCastleIndex = 0;
let score = 0;
let answerSubmitted = false;
let correctAnswerWikiUrl = '';

async function loadQuestion() {
    if (castles.length === 0) {
        // APIから城のリストを取得
        const response = await fetch('https://ja.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:%E6%97%A5%E6%9C%AC%E3%81%AE%E5%9F%8E&cmlimit=50&origin=*');
        const data = await response.json();
        const pages = data.query.categorymembers;
        castles.length = 0; // 配列をクリア
        pages.forEach(page => {
            castles.push({ name: page.title });
        });
        // 最初の質問を読み込み
        loadCastleInfo();
    } else {
        loadCastleInfo();
    }
}

async function loadCastleInfo() {
    const castle = castles[currentCastleIndex];
    document.getElementById("question").textContent = `${currentCastleIndex + 1}. このお城は何でしょう？`;
    
    // WikipediaAPIからお城の詳細を取得
    const response = await fetch(`https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(castle.name)}`);
    const data = await response.json();
    
    // 都道府県と建築年代の情報を解析
    const prefecture = data.title; // 本文中に都道府県が含まれる場合に取得
    const construction = "不明"; // データに基づいて適宜設定

    document.getElementById("castleDetails").textContent = `都道府県: ${prefecture} | 建築年代: ${construction || "[不明]"}`;

    // ヒント画像の設定
    const imageUrl = data.thumbnail ? data.thumbnail.source : "";
    const hintImage = document.getElementById("hintImage");
    if (imageUrl) {
        hintImage.src = imageUrl;
        hintImage.classList.remove("hidden");
    } else {
        hintImage.classList.add("hidden");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim();
    const correctAnswer = castles[currentCastleIndex].name;
    correctAnswerWikiUrl = `https://ja.wikipedia.org/wiki/${encodeURIComponent(correctAnswer)}`;
    if (userAnswer === correctAnswer) {
        score += 10; // 正解した場合、10点追加
        updateScoreDisplay();
        showModal(`正解！ 詳しくは <a href="${correctAnswerWikiUrl}" target="_blank">こちら</a> をご覧ください。`);
        document.getElementById("submitAnswer").classList.add("hidden");
    } else {
        showModal(`不正解です。正しい答えは ${correctAnswer} です。 詳しくは <a href="${correctAnswerWikiUrl}" target="_blank">こちら</a> をご覧ください。`);
    }
}

function showHint() {
    document.getElementById("hintContainer").classList.remove("hidden");
}

function nextQuestion() {
    currentCastleIndex++;
    if (currentCastleIndex < castles.length) {
        document.getElementById("answerInput").value = "";
        document.getElementById("hintContainer").classList.add("hidden");
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("submitAnswer").classList.remove("hidden");
        correctAnswerWikiUrl = ''; // リンクをリセット
        loadQuestion();
    } else {
        showScore();
    }
}

function updateScoreDisplay() {
    document.getElementById("score").textContent = score;
}

function showModal(message) {
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

function showScore() {
    const scoreMessage = score >= 50 ? 
        `お城マスター！お疲れ様でした！ あなたのスコアは ${score} 点です。` : 
        `お疲れ様でした！あなたのスコアは ${score} 点です。`;
    document.getElementById("scoreMessage").textContent = scoreMessage;
    document.getElementById("scoreboardSummary").classList.remove("hidden");
}
