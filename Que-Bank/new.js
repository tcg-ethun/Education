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
            title: "Hello World প্রিন্ট করুন",
            // flowchart: "images/hello_world_flowchart.png", 
            algorithm: `1. প্রোগ্রাম শুরু করুন\n2. "Hello World" প্রিন্ট করুন\n3. প্রোগ্রাম শেষ করুন`,
            code: `#include&ltstdio.h&gt
    main(){
    printf("Hello World");
}`
        },
        {
            id: 2,
            category: "Type 1",
            title: "দুটি সংখ্যার যোগফল",
            flowchart: "images/sum_flowchart.png",
            algorithm: `1. দুইটি সংখ্যা ইনপুট নিন\n2. দুই সংখ্যার যোগফল বের করুন\n3. যোগফল প্রিন্ট করুন`,
            code: `#include&ltstdio.h>
 main() {
    int a, b , sum;
    scanf("%d", &a);
    scanf("%d", &a);
    sum = a+ b;
    printf("%d", sum);
    return 0;
}`
        },
        {
            id: 3,
            category: "Type 2",
            title: "১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট",
            flowchart: "images/loop_flowchart.png",
            algorithm: `1. i = 1 থেকে শুরু করুন\n2. যতক্ষণ i <= 10, i বাড়ান\n3. প্রতিবার i প্রিন্ট করুন\n4. প্রোগ্রাম শেষ`,
            code: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`
        },
        {
            id: 4,
            category: "Type 2",
            title: "অ্যারেতে সর্বোচ্চ সংখ্যা খুঁজুন",
            flowchart: "images/array_max_flowchart.png",
            algorithm: `1. অ্যারের সাইজ নিন\n2. অ্যারে ইনপুট নিন\n3. প্রথম উপাদানকে সর্বোচ্চ ধরে নিন\n4. বাকি উপাদান গুলো চেক করুন\n5. সর্বোচ্চ উপাদান প্রিন্ট করুন`,
            code: `#include <stdio.h>

int main() {
    int n;
    printf("অ্যারের সাইজ লিখুন: ");
    scanf("%d", &n);
    int arr[n];
    printf("অ্যারের উপাদান লিখুন:\\n");
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int max = arr[0];
    for(int i = 1; i < n; i++) {
        if(arr[i] > max) max = arr[i];
    }
    printf("সর্বোচ্চ সংখ্যা: %d\\n", max);
    return 0;
}`
        },
        {
            id: 5,
            category: "Type 2",
            title: "ফাংশন ব্যবহার করে যোগফল",
            flowchart: "images/function_sum_flowchart.png",
            algorithm: `1. sum ফাংশন তৈরি করুন যা দুইটি সংখ্যা নেয়\n2. ফাংশন যোগফল রিটার্ন করে\n3. main ফাংশনে দুই সংখ্যা পাঠান\n4. যোগফল প্রিন্ট করুন`,
            code: `#include <stdio.h>

int sum(int a, int b) {
    return a + b;
}

int main() {
    int x = 5, y = 7;
    printf("যোগফল: %d\\n", sum(x, y));
    return 0;
}`
        }
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


