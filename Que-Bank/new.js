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
            title: "দুটি সংখ্যা যোগ করার জন্য C Program",
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
        problemsList.innerHTML = `<p style="text-align:center; color:#555;">Nothing Found</p>`;
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
                <div class="section-label">C Code</div>
                <pre class="code-block">${problem.code}</pre>
            </div>
        `;

        problemsList.appendChild(card);
    });
}

// প্রথমে ক্যাটাগরি ও সমস্যা রেন্ডার
renderCategories();
renderProblems();


