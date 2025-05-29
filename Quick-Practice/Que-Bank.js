
    const questionBank = {
     অপরিচিতা: [
        {
         q: "কোন বাতাসে অনুপমের শরীর মন কাঁপতে লাগল?", 
         options: ["গ্রীষ্মের", "বর্ষার", " শীতের", "বসন্তের"], 
         ans:3,
    },
    {
     q: "আসর জমাইতে অদ্বিতীয় কে?  ",
        options:[" অনুপম " , " বিনু দাদা", "হরিশ  "," কল্যাণী "],
        ans: 2,
    },
    {
        q:  " রেল ভ্রমণকালে দেখা মেয়েটির সুধাকণ্ঠকে অনুপম কীসের সাথে তুলনা করেছিল? ",
        options:[" জীয়ন কাঠি " , "সোনার কাঠি  ", "রূপার কাঠি  "," হীরার কাঠি"],
        ans: 1,
    },
    {
        q:  " বিনুদাদা ‘চমৎকার'-এর স্থলে কী বলেন? ",
        options:[" চলনসই" , " অসাধারণ ", " বিস্ময়কর "," সাদামাটা "],
        ans: 0,
    },
    {
        q:  "  অপরিচিতা গল্পের কন্যার পিতার নাম কী? ",
        options:["বিশ্বনাথ ঘোষ " , " শম্ভুনাথ সেন ", "আদ্যিনাথ বৈদ্য ","বিশ্বম্ভর দাস "],
        ans: 1,
    },

{
        q:  "  ‘বাপের এক মেয়ে যে বড়ো আদরের মেয়ে' এখানে কার কথা বোঝানো হয়েছে? ",
        options:[" আসমা " , " মাতিলদা ", " কল্যাণী "," আহ্লাদি "],
        ans: 2,
    },

{
    q:"অপরিচিতা গল্পে অনুপমের সুন্দর চেহারাকে পণ্ডিতমশায় কিসের সঙ্গে তুলনা করেছিলেন?",
    options: ["জবা ফুল ও আম","গোলাপ ফুল ও তরমুজ","শিমুল ফুল ও মাকাল ফল","জবা ফুল ও আপেল"],
    ans: 2, 
},

{
    q:"অপরিচিতা গল্পে কোন গহনায় সোনার পরিমাণ সামান্যই ছিল?",
    options: ["বালায়","গলার হারে","নাকফুলে","এয়ারিং এ"],
    ans: 3, 
},

{
    q:"অনুপম কত বছর বয়সে মাতুলকে ছেড়েছিল?",
    options: ["২২ বছর","২৫ বছর","২৭ বছর","২৯ বছর"],
    ans: 2, 
},
    // {
    //     q:  "  ",
    //     options:[" " , " ", " "," "],
    //     ans: 0,
    // },

    // {
    //     q:  "  ",
    //     options:[" " , " ", " "," "],
    //     ans: 0,
    // },

    // {
    //     q:  "  ",
    //     options:[" " , " ", " "," "],
    //     ans: 0,
    // },

    // {
    //     q:  "  ",
    //     options:[" " , " ", " "," "],
    //     ans: 0,
    // },

    
      ],




    //  বিলাসী : [
    //     {
    //      q: "সাহিত্যে খেলা বলতে কী বোঝায়?", 
    //      options: ["গল্প", "নাটক", "সাহিত্য বিষয়ক প্রশ্ন", "কবিতা"], 
    //      ans:2,
    // },
    //   ],


    //  আমার_পথ: [
    //     {
    //      q: "সাহিত্যে খেলা বলতে কী বোঝায়?", 
    //      options: ["গল্প", "নাটক", "সাহিত্য বিষয়ক প্রশ্ন", "কবিতা"], 
    //      ans:2,
    // },
    //   ],
   
    };

    // ভেরিয়েবল
    let examQuestions = [];
    let userAnswers = [];
    let timerInterval;
    let timeLeft = 0;

    // নেগেটিভ মার্কিং ভেরিয়েবল
    let negativeMarking = false; // ডিফল্ট বন্ধ
    const negativeMarkValue = 0.25; // প্রতি ভুল উত্তরে -0.25

    // Helper: shuffle
    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // Parent checkbox toggle
    function toggleParent(parent) {
      const parentBox = document.getElementById("chk_" + parent);
      const subs = document.querySelectorAll(`input[data-parent="${parent}"]`);
      subs.forEach(s => s.checked = parentBox.checked);
    }

    // নেগেটিভ মার্কিং toggle function (লোকাল স্টোরেজ সহ)
    function toggleNegMark() {
      negativeMarking = !negativeMarking;
      const btn = document.getElementById("negMarkBtn");
      const info = document.getElementById("negMarkInfo");
      
      if (negativeMarking) {
        btn.innerText = "Off";
        info.style.display = "inline";
        info.style.color= "red";
      } else {
        btn.innerText = "On";
        info.style.display = "none";
          info.style.width = "100%";
      }
      
      // লোকাল স্টোরেজে নেগেটিভ মার্কিং স্টেট সেভ করুন
      localStorage.setItem("negativeMarking", JSON.stringify(negativeMarking));
    }

    // Start Exam
    function startExam() {
      // সিলেক্টেড সাব-টপিক সংগ্রহ
      const selectedSubs = Array.from(document.querySelectorAll('input[data-parent]:checked')).map(i => i.id);
      if (selectedSubs.length === 0) {
        alert("কমপক্ষে ১টি সাব-টপিক সিলেক্ট করুন!");
        return;
      }
      const quesCount = parseInt(document.getElementById("quesCount").value);
      if (!quesCount || quesCount < 1) {
        alert("সঠিক প্রশ্নের সংখ্যা দিন!");
        return;
      }

      // প্রশ্ন সংগ্রহ
      let allQuestions = [];
      selectedSubs.forEach(sub => {
        if (questionBank[sub]) {
          allQuestions = allQuestions.concat(questionBank[sub]);
        }
      });

      if (allQuestions.length === 0) {
        alert("সিলেক্টেড সাব-টপিকের জন্য প্রশ্ন পাওয়া যায়নি!");
        return;
      }

      shuffle(allQuestions);
      examQuestions = allQuestions.slice(0, quesCount);
      userAnswers = new Array(examQuestions.length).fill(null);

      // লোকাল স্টোরেজে সেভ (নেগেটিভ মার্কিং স্টেট সহ)
      localStorage.setItem("examQuestions", JSON.stringify(examQuestions));
      localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
      localStorage.setItem("negativeMarking", JSON.stringify(negativeMarking));
      localStorage.setItem("timeLeft", timeLeft.toString());

      renderQuestions();

      // টাইমার সেটআপ (প্রতিটি প্রশ্ন 1 মিনিট ধরে)
      timeLeft = quesCount * 60;
      localStorage.setItem("timeLeft", timeLeft.toString());
      updateTimerDisplay();
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timeLeft--;
        localStorage.setItem("timeLeft", timeLeft.toString());
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          alert("Time Out !");
          viewResult();
        }
      }, 1000);

      // UI আপডেট
      document.getElementById("mainPage").style.display = "none";
      document.getElementById("examPage").style.display = "block";
      document.getElementById("viewResultBtn").disabled = false;
      document.getElementById("restartBtn").style.display = "none";
      document.getElementById("resultSummary").innerHTML = "";
    }

    // টাইমার আপডেট
    function updateTimerDisplay() {
      const min = Math.floor(timeLeft / 60).toString().padStart(2, "0");
      const sec = (timeLeft % 60).toString().padStart(2, "0");
      document.getElementById("timerDisplay").innerText = `Time : ${min}:${sec}`;
    }

    // প্রশ্ন রেন্ডার
    function renderQuestions() {
      const container = document.getElementById("allQuestions");
      container.innerHTML = "";
      examQuestions.forEach((q, idx) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="exam-question">${idx + 1}. ${q.q}</div>
          <div class="options-list" id="optionsList${idx}">
            ${q.options.map((opt, i) => `<button class="option-btn" id="opt${idx}_${i}" onclick="selectOption(${idx},${i})">${opt}</button>`).join("")}
          </div>
        `;
        container.appendChild(div);
      });

      // পূর্বের উত্তর থাকলে সিলেক্ট দেখানো
      const savedAnswers = JSON.parse(localStorage.getItem("userAnswers") || "[]");
      savedAnswers.forEach((ans, idx) => {
        if (ans !== null) {
          selectOption(idx, ans, false);
        }
      });
    }

    // অপশন সিলেক্ট
    function selectOption(qidx, optidx, save = true) {
      userAnswers[qidx] = optidx;
      const btns = document.querySelectorAll(`#optionsList${qidx} .option-btn`);
      btns.forEach((btn, i) => {
        btn.classList.toggle("selected", i === optidx);
      });
      if (save) {
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
      }
    }

    // রেজাল্ট দেখানো (নেগেটিভ মার্কিং সহ)
    function viewResult() {
      for (let i = 0; i < examQuestions.length; i++) {
        if (userAnswers[i] === null) {
          alert(`প্রশ্ন ${i + 1} এর উত্তর দিন!`);
          return;
        }
      }
      if (timerInterval) clearInterval(timerInterval);

      examQuestions.forEach((q, idx) => {
        const ua = userAnswers[idx];
        const ca = q.ans;
        const btns = document.querySelectorAll(`#optionsList${idx} .option-btn`);
        btns.forEach((btn, i) => {
          btn.disabled = true;
          btn.classList.remove("selected");
          if (i === ca) btn.classList.add("correct");
          if (i === ua && ua !== ca) btn.classList.add("incorrect");
        });
      });

      let correct = 0;
      let wrong = 0;
      examQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.ans) {
          correct++;
        } else {
          wrong++;
        }
      });

      let totalScore = correct;
      if (negativeMarking) {
        totalScore = correct - (wrong * negativeMarkValue);
        if (totalScore < 0) totalScore = 0;
      }

      const total = examQuestions.length;
      let resultText = `<p>Final Result</p> <font color="black" > মোট নম্বর: ${totalScore.toFixed(2)} / ${total}</font> `;
      if (negativeMarking) {
        resultText += ` <br>সঠিক : ${correct}<br> <font color="red"> ভুল : ${wrong} <br> নেগেটিভ : -${(wrong * negativeMarkValue).toFixed(2)}</font>`;
      }
      
      document.getElementById("resultSummary").innerHTML = resultText;
      document.getElementById("viewResultBtn").disabled = true;
      document.getElementById("restartBtn").style.display = "inline-block";

      // লোকাল স্টোরেজ ক্লিয়ার
      localStorage.removeItem("examQuestions");
      localStorage.removeItem("userAnswers");
      localStorage.removeItem("negativeMarking");
      localStorage.removeItem("timeLeft");
    }

    function restartExam() {
      // লোকাল স্টোরেজ সম্পূর্ণ ক্লিয়ার
      localStorage.removeItem("examQuestions");
      localStorage.removeItem("userAnswers");
      localStorage.removeItem("negativeMarking");
      localStorage.removeItem("timeLeft");
      location.reload();
    }

    // পেজ লোড হলে লোকাল স্টোরেজ থেকে ডেটা রিস্টোর করার চেষ্টা
    window.onload = function () {
      const savedQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");
      const savedAnswers = JSON.parse(localStorage.getItem("userAnswers") || "null");
      const savedNegativeMarking = JSON.parse(localStorage.getItem("negativeMarking") || "false");
      const savedTimeLeft = parseInt(localStorage.getItem("timeLeft") || "0");

      // নেগেটিভ মার্কিং স্টেট রিস্টোর
      negativeMarking = savedNegativeMarking;
      const btn = document.getElementById("negMarkBtn");
      const info = document.getElementById("negMarkInfo");
      
      if (negativeMarking) {
        btn.innerText = "Off";
      } else {
        btn.innerText = "On";
      }

      if (savedQuestions && savedAnswers) {
        examQuestions = savedQuestions;
        userAnswers = savedAnswers;
        timeLeft = savedTimeLeft;
        
        document.getElementById("mainPage").style.display = "none";
        document.getElementById("examPage").style.display = "block";
        renderQuestions();

        document.getElementById("viewResultBtn").disabled = false;
        document.getElementById("restartBtn").style.display = "none";
        document.getElementById("resultSummary").innerHTML = "";
        
        updateTimerDisplay();
        
        // টাইমার চালু করুন
        if (timeLeft > 0) {
          if (timerInterval) clearInterval(timerInterval);
          timerInterval = setInterval(() => {
            timeLeft--;
            localStorage.setItem("timeLeft", timeLeft.toString());
            updateTimerDisplay();
            if (timeLeft <= 0) {
              clearInterval(timerInterval);
              alert("সময় শেষ! পরীক্ষাটি সাবমিট করা হচ্ছে।");
              viewResult();
            }
          }, 1000);
        }
      }
    };