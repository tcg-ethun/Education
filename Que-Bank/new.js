const data = {
    categories: [
        "All",
        "Type 1",
        "Type 2",
        "Type 3"
    ],
    problems: [
        {
            id: 1,
            category: "Type 1",
            title: "1. দুটি সংখ্যা যোগফল নির্ণয় ",
            flowchart: "../Pho/sum.jpg", 
            algorithm: `1. প্রোগ্রাম শুরু করি ।\n2. Input a,b গ্রহণ করি ।\n3. sum = a+ b হিসাব করি ।\n4. Output sum প্রিন্ট করি। \n5.প্রোগ্রাম শেষ করি ।`,
            code: `#include&ltstdio.h&gt
    main(){
       int a , b , sum ;
       scanf("%d",&a);
       scanf("%d",&b);
       sum = a+b;
       printf("%d",sum);
}`
        },
        {
            id: 2,
            category: "Type 1",
            title: "2. তিনটি সংখ্যার গড়  নির্ণয় ",
            flowchart: "../Pho/avarage.jpg", 
            algorithm: `1. প্রোগ্রাম শুরু করি ।\n2. Input x,y,z গ্রহণ করি ।\n3. F = (x+y+z)/3 হিসাব করি ।\n4. Output F প্রিন্ট করি। \n5.প্রোগ্রাম শেষ করি ।`,
            code: `#include&ltstdio.h&gt
    main(){
       float x,y,z,F ;
       scanf("%f",&x);
       scanf("%f",&y);
       scanf("%f",&z);
        F= (x+y+z)/3;
       printf("%.2f",F);
}`
        },
        {
            id: 3,
            category: "Type 1",
            title: "3. গোলকের ক্ষেত্রফল  নির্ণয় ",
            flowchart: "../Pho/golok.jpg", 
            algorithm: `1. প্রোগ্রাম শুরু করি ।\n2. Input r গ্রহণ করি ।\n3. V = 4πr<sup>2</sup> হিসাব করি ।\n4. Output V প্রিন্ট করি। \n5.প্রোগ্রাম শেষ করি ।`,
            code: `#include&ltstdio.h&gt
#define pi 3.1416
    main(){
       float r,V;
       scanf("%f",&r);
        V= 4*pi*r*r; 
       printf("%.2f",V);
}`
        },
        {
            id: 4,
            category: "Type 1",
            title: "4. আয়তক্ষেত্রের ক্ষেত্রফল  নির্ণয় ",
            flowchart: "../Pho/reqtangle.jpg", 
            algorithm: `1. প্রোগ্রাম শুরু করি ।\n2. Input x,y গ্রহণ করি ।\n3. A = x*y হিসাব করি ।\n4. Output A প্রিন্ট করি। \n5.প্রোগ্রাম শেষ করি ।`,
            code: `#include&ltstdio.h&gt
    main(){
       int x,y,A;
       scanf("%d",&x);
       scanf("%d",&y);
        A = x*y; 
       printf("%d",A);
}`
        },
        {
            id: 5,
            category: "Type 1",
            title: "5. বৃত্তের ক্ষেত্রফল  নির্ণয় ",
            flowchart: "../Pho/brittw.jpg", 
            algorithm: `1. প্রোগ্রাম শুরু করি ।\n2. Input r গ্রহণ করি ।\n3. A = πr<sup>2</sup> হিসাব করি ।\n4. Output A প্রিন্ট করি। \n5.প্রোগ্রাম শেষ করি ।`,
            code: `#include&ltstdio.h&gt
#define pi 3.1416
    main(){
       float r,A;
       scanf("%f",&r);
        A = pi*r*r; 
       printf("%f",A);
}`
        },
        {
            id: 6,
            category: "Type 1",
            title: "6. ত্রিভুজের ক্ষেত্রফল  নির্ণয় ",
            flowchart: "../Pho/Trivuj.jpg", 
            algorithm: `1. প্রোগ্রাম শুরু করি ।\n2. Input b,h গ্রহণ করি ।\n3. A = 0.5*b*h হিসাব করি ।\n4. Output A প্রিন্ট করি। \n5.প্রোগ্রাম শেষ করি ।`,
            code: `#include&ltstdio.h&gt
    main(){
       float b,h,A;
       scanf("%f",&b);
       scanf("%f",&h);
        A = 0.5*b*h; 
       printf("%f",A);
}`
        },

    ]
};

const categoryNav = document.getElementById('categoryNav');
const problemsList = document.getElementById('problemsList');

let selectedCategory = "All";

function renderCategories() {
    categoryNav.innerHTML = '';
    data.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = cat;
        if(cat === selectedCategory) btn.classList.add('active');
        btn.setAttribute('aria-pressed', cat === selectedCategory ? 'true' : 'false');
        btn.addEventListener('click', () => {
            selectedCategory = cat;
            renderCategories();
            renderProblems();
        });
        categoryNav.appendChild(btn);
    });
}

function renderProblems() {
    problemsList.innerHTML = '';
    const filtered = selectedCategory === "All" 
        ? data.problems 
        : data.problems.filter(p => p.category === selectedCategory);

    if(filtered.length === 0) {
        problemsList.innerHTML = `<p style="text-align:center; color:#555;">This Type is Updating....</p>`;
        return;
    }

    filtered.forEach(problem => {
        const card = document.createElement('article');
        card.className = 'problem-card';
        card.setAttribute('role', 'listitem');

        card.innerHTML = `
            <h3 class="problem-title">${problem.title}</h3>

            <div>
                <div class="section-label">Flowchart</div>
                <img src="${problem.flowchart}" alt="Flowchart for ${problem.title} " class="flowchart-img" loading="lazy" />
            </div>

            <div>
                <div class="section-label">Algorithm</div>
                <pre class="algorithm-text">${problem.algorithm}</pre>
            </div>

            <div>
                <div class="section-label">C Program </div>
                <pre class="code-block">${problem.code}</pre>
            </div>
        `;

        problemsList.appendChild(card);
    });
}

// প্রথমে ক্যাটাগরি ও সমস্যা রেন্ডার
renderCategories();
renderProblems();


