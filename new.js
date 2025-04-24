document.addEventListener('DOMContentLoaded', function() {
    const questionRange = document.getElementById('question-range');
    const selectedCountLabel = document.getElementById('questions-count');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const setupContainer = document.getElementById('setup-container');
    const quizContainer = document.getElementById('quiz-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionIndicator = document.getElementById('question-indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const viewResultsBtn = document.getElementById('view-results-btn');
    const resetQuizBtn = document.getElementById('reset-quiz-btn');
    const resultsContainer = document.getElementById('results-container');
    const scoreElement = document.getElementById('score');
    const resultsDetails = document.getElementById('results-details');
    const backToQuizBtn = document.getElementById('back-to-quiz-btn');

    // Array of all questions
    const allQuestions = [
       /*1*/   { q: 'বিশ্বের সবচেয়ে গরম দেশ কোনটি?', options: ['লিবিয়া', 'সৌদি আরব', 'মিশর', 'ইরাক'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে ঠান্ডা স্থান কোনটি?', options: ['সাইবেরিয়া', 'অ্যান্টার্কটিকা', 'গ্রিনল্যান্ড', 'আলাস্কা'], answer: 1 },
        { q: 'বিশ্বের সবচেয়ে বড় বায়ু বিদ্যুৎ উৎপাদনকারী দেশ কোনটি?', options: ['চীন', 'আমেরিকা', 'জার্মানি', 'ভারত'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় তেল উৎপাদনকারী দেশ কোনটি?', options: ['সৌদি আরব', 'রাশিয়া', 'আমেরিকা', 'ইরাক'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় বিমানবন্দর কোনটি?', options: ['দুবাই আন্তর্জাতিক বিমানবন্দর', 'হিথ্রো বিমানবন্দর', 'চাঙ্গি বিমানবন্দর', 'আটাতুর্ক বিমানবন্দর'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় শহর (জনসংখ্যার দিক থেকে) কোনটি?', options: ['টোকিও', 'দিল্লি', 'শাংহাই', 'মুম্বাই'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় প্রাচীন সভ্যতা কোনটি?', options: ['মেসোপটেমিয়া', 'মিশর', 'ইন্ডাস', 'চীন'], answer: 0 },
        { q: 'বিশ্বের সবচেয়ে বড় বন্যপ্রাণী অভয়ারণ্য কোনটি?', options: ['ক্রুগার ন্যাশনাল পার্ক', 'সারেঙ্গেটি', 'বানফ ন্যাশনাল পার্ক', 'রামারি'], answer: 1 },
        { q: 'বিশ্বের সবচেয়ে বড় সমুদ্রের দ্বীপ কোনটি?', options: ['গ্রিনল্যান্ড', 'নিউ গিনি', 'বোর্নিও', 'মাদাগাস্কার'], answer: 0 },
        /*10*/  { q: 'বিশ্বের সবচেয়ে বড় বায়ু বিদ্যুৎ উৎপাদনকারী দেশ কোনটি?', options: ['চীন', 'জার্মানি', 'আমেরিকা', 'ভারত'], answer: 0 },
        { q: 'আয়তন অনুযায়ী বাংলাদেশের ক্ষুদ্রতম জেলা কোনটি?', options: [ 'পঞ্চগড়', 'রাঙ্গামাটি', 'সাতক্ষীরা', 'নারায়ণগঞ্জ' ], answer: 3 },
         { q: 'আয়তনের দিক থেকে বিশ্বে বাংলাদেশের স্থান কততম?', options: [ '৮৫', '৯২', '৯৪', '১০২' ], answer: 2 }, 
         { q: 'বাংলাদেশের সকল পৌরসভার সদস্য সংখ্যা -', options: [ 'সমান', 'এলাকা ও জনসংখ্যার ভিত্তিতে নির্ধারিত', 'সরকার কর্তৃক নির্ধারিত', 'মেয়র কর্তৃক নির্ধারিত' ], answer: 1 }, 
         { q: 'বাংলাদেশের সর্ব উত্তরের জেলা থেকে হিমালয়ের কোন শৃঙ্গ দেখা যায়?', options: [ 'কাঞ্চনজঙ্ঘা', 'চিম্বুক', 'এভারেস্ট', 'কেওকারাডং' ], answer: 0 }, 
         { q: 'Which constitutional amendment replaced "Dacca" as "Dhaka"?', options: [ 'The Fourth Amendment, 1975', 'The Sixth Amendment, 1981', 'The Eighth Amendment, 1988', 'The Tenth Amendment, 1990' ], answer: 2 }, 
         { q: 'Which one of the following is not a local government institution?', options: [ 'Zilla Parishad', 'Union Parishad', 'Upazila Parishad', 'Divisional Board' ], answer: 3 }, 
         { q: 'Time difference of Bangladesh with Greenwich Meantime is-', options: [ '5 hours', '6 hours', '7 hours', '8 hours' ], answer: 1 },
         { q: 'ঢাকায় সর্বপ্রথম কবে রাজধানী স্থাপিত হয়?', options: [ '১২১০ খ্রিষ্টাব্দে', '১৩১০ খ্রিষ্টাব্দে', '১৫২০ খ্রিষ্টাব্দে', '১৬১০ খ্রিষ্টাব্দে' ], answer: 3 },
          { q: 'ঢাকায় বাংলার প্রথম রাজধানী কবে স্থাপিত হয়?', options: [ '১৫১০ সালে', '১৫৯০ সালে', '১৬০০ সালে', '১৬১০ সালে' ], answer: 3 }, 
        /*20*/    { q: 'বাংলাদেশে সিটি কর্পোরেশনের সংখ্যা কয়টি?', options: [ '১২', '১৫', '৮', '৯' ], answer: 2 }, 
          { q: 'বাংলাদেশের বৃহত্তম জেলা কোনটি?', options: [ 'ঢাকা', 'নারায়ণগঞ্জ', 'রাঙামাটি', 'সিলেট' ], answer: 2 }, 
          { q: 'বাংলাদেশের প্রথম "সাইবার সিটি"', options: [ 'কুমিল্লা', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট' ], answer: 3 }, 
          { q: 'মৌজা কী?', options: [ 'গ্রাম', 'ভূমির কর', 'পদবি', 'ভূমির কর একক' ], answer: 0 }, 
          { q: 'Considering the land area, what is largest and smallest Upazila of Bangladesh?', options: [ 'Thanchi, Amtali', 'Shibaganj, Karnaphuli', 'Shyamnagar, Polash', 'Betagi, Bakergonj' ], answer: 2 }, 
          { q: 'Which one is the least populated division of Bangladesh?', options: [ 'Rangpur', 'Barisal', 'Mymensingh', 'Sylhet' ], answer: 1 },
          { q: 'Which of the following is the largest district In terms of volume?', options: [ 'Chattagram', 'Rangamati', 'Bandarban', 'Dhaka' ], answer: 1 }
    
,            {
              q: 'Most southern part district of Bangladesh is-',
              options: ['Panchagarh', 'Bandarban', 'Sylhet', 'Cox\'s Bazar'],
              answer: 3
            },
            {
              q: 'Which of the following district has two borderline countries?',
              options: ['Rangamati', 'Sylhet', 'Mymensingh', 'Lalmonirhat'],
              answer: 0
            },
            {
              q: 'In the history of Dhaka, when was it declared capital for the first time?',
              options: ['1601', '1610', '1621', '1630'],
              answer: 1
            },
            {
              q: 'আয়তনে বাংলাদেশের সর্ববৃহৎ সিটি কর্পোরেশন কোনটি?',
               options: ['রাজশাহী', 'ঢাকা', 'চট্টগ্রাম', 'গাজীপুর'],  /*30*/ 
              answer: 3
            },
            {
              q: 'ঢাকাকে প্রথম কখন বাংলার রাজধানী করা হয়?',
              options: ['১৫১০ সালে', '১৫৯০ সালে', '১৬০০ সালে', '১৬১০ সালে'],
              answer: 3
            },
            {
              q: 'GMT বা গ্রিনিচমান সময়ের সাথে বাংলাদেশের সময়ের পার্থক্য কত ঘণ্টা?',
              options: ['৬ ঘন্টা', '৮ ঘন্টা', '১০ ঘন্টা', '৫ ঘন্টা'],
              answer: 0
            },
            {
              q: 'বাংলাদেশের সর্ব-উত্তরে অবস্থিত জেলার নাম?',
              options: ['কুড়িগ্রাম', 'পীরগঞ্জ', 'পঞ্চগড়', 'সিলেট'],
              answer: 2
            },
            {
              q: 'বাংলাদেশের সর্বশেষ বিভাগের নাম কী?',
              options: ['ময়মনসিংহ', 'বরিশাল', 'খুলনা', 'রংপুর'],
              answer: 0
            },
            {
              q: 'স্বাধীনতালগ্নে বাংলাদেশের জেলা ছিল কতটি?',
              options: ['১৯', '২১', '৩২', '48'],
              answer: 0
            },
            {
              q: 'আয়তনে বাংলাদেশের বড় জেলা কোনটি?',
              options: ['ঢাকা', 'নারায়ণগঞ্জ', 'পার্বত্য রাঙ্গামাটি', 'পার্বত্য বান্দরবান'],
              answer: 2
            },
            {
              q: 'ঢাকা কত সালে সুবা-বাংলার রাজধানী হয়?',
              options: ['১৬১০', '১৬১১', '১৯১২', '১৬১৫'],
              answer: 0
            },
            {
              q: 'In term of land area, which one is the largest district of Bangladesh?',
              options: ['Rangamati', 'Chittagong', 'Dhaka', 'Feni'],
              answer: 0
            },
            {
              q: 'বাংলাদেশের বৃহত্তম উপজেলা কোনটি?',
              options: ['শ্যামনগর', 'ঘাটাইল', 'সাভার', 'বরকল'],
              answer: 0
            },
              {
              q: 'বংলাদেশের সবচেয়ে কম বসতিপূর্ণ জেলা কোনটি?',
              options: ['বান্দরবান', 'রাঙ্গামাটি', 'খাগড়াছড়ি', 'মেহেরপুর'], /*40*/ 
              answer: 0
            },
             {
              q: 'তথ্য মন্ত্রণালয়ের বর্তমান নাম কী?',
              options: ['তথ্য ও যেতার মন্ত্রণালয়', 'তথ্য ও যোগাযোগ মন্ত্রণালয়', 'তথ্য ও সংস্কৃতি মন্ত্রণালয়', 'তথ্য ও সাংস্কৃতি মন্ত্রণালয়'],
              answer: 2
            },
            {
              q: 'প্রাচীন চন্দ্রদ্বীপের বর্তমান নাম কী?',
              options: ['মালদ্বীপ', 'সন্দ্বীপ', 'হাতিয়া', 'বরিশাল'],
              answer: 3
            },
            {
              q: 'মুফল আমলে ঢাকার নাম কী ছিল?',
              options: ['ইসলামাবাদ', 'জাহাঙ্গীরনগর', 'বিক্রমপুর', 'সোনারগাঁও'],
              answer: 3
            },
            {
                q: 'বাংলাদেশে বর্তমানে বিভাগের সংখ্যা কয়টি?',
                options: ['৬টি', '৭টি', '৮টি', '৯টি'],
                answer: 2
              },
              {
                q: 'বাংলাবান্ধা কোন জেলায় অবস্থিত?',
                options: ['ঠাকুরগাঁও', 'শেরপুর', 'পঞ্চগড়', 'জয়পুরহাট'],
                answer: 2
              },
              {
                q: 'ঢাকা পৌরসভা\'র প্রথম নির্বাচন কবে অনুষ্ঠিত হয়?',
                options: ['১৬০৮ সালে', '১৮৬৪ সালে', '১৮৮৪ সালে', ' ১৯৯০ সালে'],
                answer: 2
              },

              {
                q: 'Of which place\'s former name "Gondowana land"?',
                options: ['Dinajpur', 'Bagerhat', 'Cox\'s-Bazar', 'Noakhali'],
                answer: 0
              },
              {
                q: 'What is the previous name of \'Barishal\'?',
                options: ['Chandradeep', 'Sudharam', 'Suvarna Gram', 'Bikrampur'],
                answer: 0
              },
              {
                q: 'What was the previous name of Comilla?',
                options: ['Tripura', 'Nasirabad', 'Sudharam', 'Subarnagram'],
                answer: 0
              },
              {
                q: 'বাংলাদেশের রুটির ঝুড়ি বলা হয় কোন জেলাকে?',
                options: ['বরিশাল', 'রাজশাহী', 'যশোর', 'দিনাজপুর'], /*50*/ 
                answer: 3
              },
              {
                q: 'বাংলাদেশের সঙ্গে আন্তর্জাতিক সীমানা রয়েছে কয়টি দেশের?',
                options: ['১টি', '২টি', '৩টি', '৪টি'],
                answer: 1
              },
              
        {
            q: 'বাংলাদেশের সঙ্গে আন্তর্জাতিক সীমানা রয়েছে কয়টি দেশের?',
            options: ['১টি', '২টি', '৩টি', '৪টি'],
            answer: 1
          },
          {
            q: 'বাংলাদেশের সঙ্গে আন্তর্জাতিক সীমানা রয়েছে কয়টি দেশের?',
            options: ['১টি', '২টি', '৩টি', '৪টি'],
            answer: 1
          },
          {
            q: 'বাংলাদেশের সাথে কোন দুটি দেশের স্থলসীমান্ত রয়েছে?',
            options: ['ভারত, পাকিস্তান', 'মালদ্বীপ, ভুটান', 'নেপাল, ভারত', 'ভারত, মায়ানমার'],
            answer: 3
          },
          {
            q: 'বাংলাদেশের ভৌগোলিক সঠিক অবস্থান কোনটি?',
            options: ['২৩.৬৮৫০ ডিগ্রি উত্তর, ৯০.৩৫৬৩ ডিগ্রি পশ্চিম', '৩০.৩৭৫৩ ডিগ্রি উত্তর, ৬৯.৩৪৫১ ডিগ্রি পশ্চিম', '২০.৫৯৩৭ ডিগ্রি উত্তর, ৭৮.৯৬২৯ ডিগ্রি পশ্চিম', 'কোনটিই নয়'],
            answer: 3
          },
          {
            q: ' ১৯৪৭ সালে উপমহাদেশের স্বাধীনতার সময়কার সীমানা কমিশন কী নামে পরিচিত ছিল?',
            options: ['মাউন্টব্যাটেন কমিশন', 'সাইমন কমিশন', 'র‍্যাডক্লিফ কমিশন', 'লরেন্স কমিশন'],
            answer: 2
          },

            {
              q: 'বাংলার ভেনিস বলা হয় যে শহরকে?',
              options: ['চাঁদপুর', 'ভোলা', 'বরিশাল', 'খুলনা'],
              answer: 2
            },
            {
              q: 'ঢাকার প্রাচীন নাম কি?',
              options: ['জাহাঙ্গীরনগর', 'ইসলামপুর', 'সোনারগাঁও', 'ঢাকা'],
              answer: 0
            },
            {
              q: 'বরিশাল এর পূর্বনাম কী?',
              options: ['হরিকেল', 'বরদ্বীপ', 'চন্দ্রদ্বীপ', 'সুবর্ণচর'],
              answer: 2
            },
            {
              q: '\'গন্ডোয়ানাল্যান্ড\'- কোন স্থানের পূর্বনাম?',
              options: ['দিনাজপুর', 'বাগেরহাট', 'কক্সবাজার', 'বান্দরবান'], /*60*/ 
              answer: 0
            },
            {
              q: 'বর্তমান মুজিব নগরের পূর্বনাম কি?',
              options: ['চন্দ্রবাড়ি', 'ভবেরপাড়া', 'টুংগীপাড়া', 'শিমুলিয়া'],
              answer: 1
            },
              {
              q: '\'সিডর\' নামকরণ করে কোন দেশ?',
              options: ['শ্রীলঙ্কা', 'পাকিস্তান', 'মিয়ানমার', 'বাংলাদেশ'],
              answer: 0
            },

         
                {
                  q: 'এক নটিকাল মাইলে কত মিটার?',
                  options: ['১৭৫২ মিটার', '১৮৫২ মিটার', '১৯৫২ মিটার', '২০৫০ মিটার'],
                  answer: 1
                },
                {
                  q: 'বাংলাদেশে সীমান্তবর্তী ভারতের রাজ্যের সংখ্যা কয়টি?',
                  options: ['৩টি', '৪টি', '৫টি', '৬টি'],
                  answer: 2
                },
                {
                  q: 'নিচের কোন রেখার উপর বাংলাদেশ অবস্থিত?',
                  options: ['ট্রপিক অব ক্যাপ্রিকন', 'ট্রপিক অব ক্যানসার', 'ইকুয়েটর', 'আর্কটিক সার্কেল'],
                  answer: 1
                },
                {
                  q: 'বাংলাদেশের কোন জেলা আসামের অংশ ছিল?',
                  options: ['সিলেট', 'চট্টগ্রাম', 'কুমিল্লা', 'দিনাজপুর'],
                  answer: 0
                },
                {
                  q: 'বাংলাদেশের কোন জেলায় কর্কটক্রান্তি রেখা ও ৯০ ডিগ্রি দ্রাঘিমাংশের ছেদ বিন্দু অবস্থিত?',
                  options: ['নাটোর', 'ফরিদপুর', 'ঝালকাঠি', 'মাগুরা'],  /*67*/ 
                  answer: 1
                },

                    {
                      q: 'বাংলাদেশ ও ভারতের মধ্যে সমুদ্র সীমানা নিয়ে বিরোধ মীমাংসা হয় কোন আদালতে?',
                      options: ['A. International Court of Justice', 'B. International Tribunal for Law of the Sea', 'C. Permanent Court of Arbitration', 'D. International Criminal Court'],
                      answer: 2
                    },
                    {
                      q: 'বাংলাদেশের উত্তরে ভারতের কোন কোন রাজ্য অবস্থিত?',
                      options: ['A. পশ্চিমবঙ্গ, আসাম ও মেঘালয়', 'B. আসাম ও মেঘালয়', 'C. আসাম, ত্রিপুরা ও মেঘালয়', 'D. ত্রিপুরা ও মিজোরাম'],
                      answer: 0
                    },
                    {
                      q: 'বাংলাদেশ ও মিয়ানমার সীমান্তে অবস্থিত নদী কোনটি?',
                      options: ['A. সাঙ্গু', 'B. মাতামুহুরী', 'C. কর্ণফুলী', 'D. নাফ'],
                      answer: 3
                    },
                    {
                      q: 'বাংলাদেশের সমুদ্রসীমা বর্তমানে কত বর্গ কিলোমিটার?',
                      options: ['A. ৫০,০০০', 'B. ১৫,০০০', 'C. ২,৫০,০০০', 'D. ১,১৮,৮১৩'],
                      answer: 3
                    },
                    {
                      q: 'বাংলাদেশের কোন জেলার সাথে ভারত ও মিয়ানমার উভয় দেশের সীমান্ত রয়েছে?',
                      options: ['A. ফেনী', 'B. কক্সবাজার', 'C. রাঙামাটি', 'D. বান্দরবান'],
                      answer: 2
                    },
                    {
                      q: 'নিচের কোনটি বাংলাদেশের টেরিটোরিয়াল সমুদ্র সীমার সঠিক পরিমাপ?',
                      options: ['A. 12NM', 'B. 20NM', 'C. 210NM', 'D. 250NM'],
                      answer: 0
                    },
                    {
                      q: 'বাংলাদেশ-ভারত ছিটমহল বিনিময় কার্যকর হয় কত সালে?',
                      options: ['A. ২০১৫', 'B. ২০১৪', 'C. ২০১৩', 'D. ২০১৬'],
                      answer: 0
                    },
                    {
                      q: 'কোন সমুদ্র সৈকতকে বাংলাদেশের "সাগরকন্যা" বলা হয়?',
                      options: ['A. কক্সবাজার', 'B. পতেঙ্গা', 'C. কুয়াকাটা', 'D. সেন্টমার্টিন'],
                      answer: 2
                    },
                    {
                      q: 'হালদা ভ্যালি কোথায় অবস্থিত?',
                      options: ['A. রাঙামাটি', 'B. খাগড়াছড়ি', 'C. বান্দরবান', 'D. সন্দ্বীপ'],
                      answer: 1       /*76*/ 
                    },             
                    {
                        q: 'বাংলাদেশের সমুদ্রসীমা নির্ধারণের নাম কী?',
                        options: ['UNCLOS', 'ITLOS', 'ICJ', 'CLCS'],
                        answer: 1
                      },
                      {
                        q: 'বাংলাদেশের সমুদ্রসীমা নির্ধারণে আন্তর্জাতিক আদালতের রায় ঘোষণা করা হয় কত সালে?',
                        options: ['২০০৮', '২০১২', '২০১৪', '২০১৬'],
                        answer: 1
                      },
                      {
                        q: 'বাংলাদেশে সৃষ্ট ২০০৭ সালের ঘূর্ণিঝড়ের নাম- ',
                        options: ['অলা', 'সিডর', 'ফণী', 'কোম্পা'],
                        answer: 1
                      },
                      {
                        q: 'বাংলাদেশে ঘটে যাওয়া সবচেয়ে বড় ভূমিকম্প- ',
                        options: ['মহাপ্লাবন', 'কোম্পানিগঞ্জ ভূমিকম্প', 'আসমা ভূমিকম্প', 'মোঘল ভূমিকম্প'],
                        answer: 2
                      },
                      {
                        q: 'ভারতের সাথে বাংলাদেশের সীমান্ত দৈর্ঘ্য কত কিলি.মি.? ',
                        options: ['৪,০৯৬ কিমি.', '২,৫১ কিমি.', '২,৭১ কিমি.', '৪,১৫৬ কিমি.'],
                        answer: 3
                      },
                      {
                        q: 'মিয়ানমারের সাথে বাংলাদেশের স্থলসীমান্ত কত কিলি.মি.?',
                        options: ['২৭১ কিমি.', '২১০ কিমি.', '৩২১ কিমি.', '২৮১ কিমি.'],
                        answer: 0
                      },
                      {
                        q: 'বাংলাদেশের মোট আয়তন কত বর্গ কিলি.মি.? ',
                        options: ['১,৪৭,৫৭০', '১,৪৮,০০০', '১,৪৭,৫০০', '১,৪৮,৫৭০'],
                        answer: 0
                      },
                      {
                        q: 'বিশ্বের দক্ষিণতম দেশ কোনটি? ',
                        options: ['বাংলাদেশ', 'জাপান', 'চিলি', 'আর্জেন্টিনা'],
                        answer: 2
                      },
                      {
                        q: 'সিডর (SIDR) সংঘটিত হয়- ',
                        options: ['২০০৭', '২০০৮', '২০০৭', '২০০৯'],
                        answer: 2
                      },                            /*85*/ 
                      {
                        q: 'Which of the following states of India does not have a border with Bangladesh?',
                        options: ['Mizoram', 'Tripura', 'Assam', 'Monipur'],
                        answer: 3
                      },
                      {
                        q: 'Which Indian state shares a border with Bangladesh?',
                        options: ['West Bengal', 'Assam', 'Meghalaya', 'A, B & C'],
                        answer: 3
                      },
                      {
                        q: 'The Seven Sisters are called-',
                        options: ['Companies in India', 'To British companies', 'To American companies', 'British and American companies'],
                        answer: 0
                      },
                      {
                        q: 'How many districts of Bangladesh have direct border with India?',
                        options: ['30', '31', '32', '35'],
                        answer: 0
                      },
                      {
                        q: 'The number of common rivers between Bangladesh and India is',
                        options: ['50', '52', '53', '54'],
                        answer: 3
                      },                          /*90*/ 
    ];

    let questions = [];
    let currentQuestionIndex = 0;
    let userAnswers = {};

    // Display selected range value
    questionRange.addEventListener('input', () => {
        selectedCountLabel.textContent = questionRange.value;
    });

    // Start quiz with selected number of questions
    startQuizBtn.addEventListener('click', () => {
        const selectedCount = parseInt(questionRange.value);

        if (selectedCount > allQuestions.length) {
            alert("প্রশ্নের সংখ্যা ডেটাবেজের চেয়ে বেশি!");
            return;
        }

        questions = getRandomQuestions(allQuestions, selectedCount);
        currentQuestionIndex = 0;
        userAnswers = {};

        // Save the selected questions, currentQuestionIndex, and userAnswers in localStorage
        localStorage.setItem('quizQuestions', JSON.stringify(questions));
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);

        setupContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        displayQuestion();
    });

    // Get random questions from the full array
    function getRandomQuestions(allQuestions, selectedCount) {
        let shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
        return shuffledQuestions.slice(0, selectedCount);
    }

    // Display the current question
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.q;
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;

            if (userAnswers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }

            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });

        questionIndicator.textContent = `প্রশ্ন ${currentQuestionIndex + 1} এর মধ্যে ${questions.length}`;
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    }

    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        saveAnswers();
    
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });
    }

    // Save answers to localStorage
    function saveAnswers() {
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
    }

    // Go to previous question
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            saveProgress();
            displayQuestion();
        }
    });

    // Go to next question
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            saveProgress();
            displayQuestion();
        }
    });

    // Save current progress (question index and answers) to localStorage
    function saveProgress() {
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
    }

    // View results
    viewResultsBtn.addEventListener('click', () => {
        let correctAnswers = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                correctAnswers++;
            }
        });

        scoreElement.textContent = `আপনি ${correctAnswers} টি সঠিক উত্তর দিয়েছেন।`;

        resultsDetails.innerHTML = '';
        questions.forEach((question, index) => {
            const resultItem = document.createElement('div');
            const userAnswer = userAnswers[index] !== undefined ? question.options[userAnswers[index]] : 'উত্তর দেওয়া হয়নি';
            const isCorrect = userAnswers[index] === question.answer;

            resultItem.classList.add(isCorrect ? 'correct' : 'incorrect');
            resultItem.innerHTML = `
                <p><strong>প্রশ্ন ${index + 1}: ${question.q}</strong> </p>
                <p>আপনার উত্তর: ${userAnswer}</p>
                <p>সঠিক উত্তর: ${question.options[question.answer]}</p>
            `;
            resultsDetails.appendChild(resultItem);
        });

        quizContainer.classList.add('hidden');
        viewResultsBtn.classList.add('hidden');
        resetQuizBtn.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    });

    // Reset quiz
    resetQuizBtn.addEventListener('click', () => {
        localStorage.removeItem('quizQuestions');
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('currentQuestionIndex');
        setupContainer.classList.remove('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
    });

    // Back to quiz from results
    backToQuizBtn.addEventListener('click', () => {
        resultsContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        viewResultsBtn.classList.remove('hidden');
        resetQuizBtn.classList.remove('hidden');
    });

    // Initialize quiz data from localStorage if available
    const savedQuestions = JSON.parse(localStorage.getItem('quizQuestions'));
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
    const savedIndex = localStorage.getItem('currentQuestionIndex');

    if (savedQuestions && savedAnswers && savedIndex !== null) {
        questions = savedQuestions;
        userAnswers = savedAnswers;
        currentQuestionIndex = parseInt(savedIndex);

        setupContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        displayQuestion();
    }
});