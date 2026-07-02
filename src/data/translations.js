export const products = [
  {
    id: 1,
    category: 'skincare',
    image: '/monly_serum.png',
    price: 8900,
    translations: {
      en: {
        name: 'Hydro-Glow Face Serum',
        tagline: 'Deep hydration & luminous glow',
        description: 'A luxurious, lightweight facial serum infused with multi-molecular Hyaluronic Acid, Niacinamide, and organic Rosewater. It penetrates deeply to plump the skin, reduce redness, and deliver an instant radiant dewiness.',
        ingredients: 'Organic Rosewater, Hyaluronic Acid (1.5%), Niacinamide (3%), Panthenol (B5), Aloe Vera Leaf Extract, Glycerin, Phenoxyethanol.',
        usage: 'Apply 3-4 drops to clean, damp face and neck morning and night. Gently pat into the skin until fully absorbed before applying moisturizer.'
      },
      hy: {
        name: 'Hydro-Glow Դեմքի Շիճուկ',
        tagline: 'Խորը խոնավեցում և լուսավոր փայլ',
        description: 'Շքեղ և թեթև դեմքի շիճուկ՝ հարստացված բազմամոլեկուլային հիալուրոնաթթվով, նիացինամիդով և բնական վարդաջրով: Այն թափանցում է մաշկի խորը շերտեր՝ հաղորդելով մաշկին առաձգականություն և ակնթարթային բնական փայլ:',
        ingredients: 'Բնական Վարդաջուր, Հիալուրոնաթթու (1.5%), Նիացինամիդ (3%), Պանտենոլ (B5), Ալոե Վերայի Մզվածք, Գլիցերին, Ֆենոքսիէթանոլ:',
        usage: 'Քսել 3-4 կաթիլ մաքուր, խոնավ դեմքին և պարանոցին առավոտյան և երեկոյան: Մեղմորեն տարածել մինչև ամբողջական ներծծվելը նախքան խոնավեցնող կրեմ քսելը:'
      }
    }
  },
  {
    id: 2,
    category: 'cosmetics',
    image: '/monly_liptint.png',
    price: 5400,
    translations: {
      en: {
        name: 'Velvet Lip Tint',
        tagline: 'Satin-matte finish & long-lasting wear',
        description: 'Formulated with organic oils and botanical extracts, this velvet lip tint glides on like silk and dries to a lightweight, transfer-proof, satin-matte finish. Keeps lips hydrated for hours.',
        ingredients: 'Jojoba Seed Oil, Shea Butter, Rosehip Fruit Oil, Vitamin E, Hyaluronic Acid, Natural Pigments, Silica.',
        usage: 'Apply directly to lips starting from the center and blending outwards. Build up for a more intense color payoff.'
      },
      hy: {
        name: 'Velvet Շրթներկ-Տինտ',
        tagline: 'Սատինե-մատային տեսք և երկարատև ազդեցություն',
        description: 'Պատրաստված է բնական յուղերից և բուսական մզվածքներից: Այս թավշյա տինտը սահում է մետաքսի պես և չորանում՝ հաղորդելով թեթև, երկարատև սատինե-մատային ծածկույթ: Խոնավեցնում է շուրթերը ժամեր շարունակ:',
        ingredients: 'Ժոժոբայի Յուղ, Շիի Յուղ, Մասուրի Յուղ, Վիտամին E, Հիալուրոնաթթու, Բնական Պիգմենտներ, Սիլիկա:',
        usage: 'Քսել անմիջապես շուրթերին՝ սկսելով կենտրոնից և տարածելով դեպի եզրերը: Ավելի ինտենսիվ գույն ստանալու համար քսել երկրորդ շերտը:'
      }
    }
  },
  {
    id: 3,
    category: 'skincare',
    image: '/monly_cream.png',
    price: 11500,
    translations: {
      en: {
        name: 'Peptide Renewal Cream',
        tagline: 'Firming barrier support & elasticity',
        description: 'A rich nourishing moisturizer containing high-potency Peptides and Ceramides to strengthen the skin barrier, boost collagen synthesis, and smooth fine lines. Ideal for overnight repair.',
        ingredients: 'Triple Peptide Complex, Ceramide NP, Squalane, Shea Butter, Green Tea Extract, Centella Asiatica Extract, Rosehip Oil.',
        usage: 'Massage a dime-sized amount onto clean face and neck in upward circular motions as the final step of your evening skincare routine.'
      },
      hy: {
        name: 'Պեպտիդային Վերականգնող Կրեմ',
        tagline: 'Մաշկի պատնեշի ամրապնդում և առաձգականություն',
        description: 'Սնուցող խոնավեցնող կրեմ՝ հարուստ պեպտիդներով և կերամիդներով: Այն ամրապնդում է մաշկի պաշտպանիչ պատնեշը, խթանում կոլագենի արտադրությունը և հարթեցնում կնճիռները: Իդեալական է գիշերային վերականգնման համար:',
        ingredients: 'Եռակի Պեպտիդային Կոմպլեքս, Կերամիդ NP, Սկվալան, Շիի Յուղ, Կանաչ Թեյի Մզվածք, Ցենտելլա Ասիատիկա, Մասուրի Յուղ:',
        usage: 'Մաքուր դեմքին և պարանոցին քսել փոքր քանակությամբ կրեմ՝ մերսող շարժումներով, որպես երեկոյան խնամքի վերջին փուլ:'
      }
    }
  },
  {
    id: 4,
    category: 'skincare',
    image: '/monly_serum.png',
    price: 6200,
    translations: {
      en: {
        name: 'Rosewater Daily Cleanser',
        tagline: 'Gentle clarifying & soothing wash',
        description: 'A gentle, non-stripping gel cleanser that lifts impurities, makeup, and excess oil while preserving the skin\'s natural moisture. Soothes skin irritation and leaves a fresh feeling.',
        ingredients: 'Organic Bulgarian Rosewater, Chamomile Extract, Cucumber Extract, Coco-Glucoside, Glycerin, Allantoin, Citric Acid.',
        usage: 'Dampen face and massage 1-2 pumps of cleanser in circular motions. Rinse thoroughly with lukewarm water and pat dry.'
      },
      hy: {
        name: 'Վարդաջրով Մաքրող Գել',
        tagline: 'Մեղմ մաքրում և հանգստացնող խնամք',
        description: 'Մեղմ, փրփրացող գել-մաքրող միջոց, որը մաքրում է կեղտը, դիմահարդարումը և ավելորդ յուղը՝ միաժամանակ պահպանելով մաշկի բնական խոնավությունը: Հանգստացնում է գրգռված մաշկը:',
        ingredients: 'Բնական Վարդաջուր, Երիցուկի Մզվածք, Վարունգի Մզվածք, Կոկո-Գլյուկոզիդ, Գլիցերին, Ալանտոին, Կիտրոնաթթու:',
        usage: 'Խոնավացնել դեմքը և մերսել 1-2 սեղմում գելը շրջանաձև շարժումներով: Լավ լվանալ գոլ ջրով և չորացնել սրբիչով:'
      }
    }
  },
  {
    id: 5,
    category: 'cosmetics',
    image: '/monly_liptint.png',
    price: 7800,
    translations: {
      en: {
        name: 'Dewy Skin Liquid Highlighter',
        tagline: 'Shimmering liquid gold for a sun-kissed look',
        description: 'An ultra-fine liquid highlighter that reflects light to give you a natural glass-skin finish. Can be worn alone, mixed with moisturizer, or applied to high points of the face.',
        ingredients: 'Mica, Sunflower Seed Oil, Grape Seed Oil, Rose Fruit Extract, Vitamin E, Organic Pearlescent Pigments.',
        usage: 'Apply 1-2 dots to cheekbones, brow bones, and the bridge of the nose. Blend with fingers, sponge, or brush for a seamless glow.'
      },
      hy: {
        name: 'Dewy Skin Հեղուկ Հայլայթեր',
        tagline: 'Շողշողացող հեղուկ ոսկի՝ արևային փայլի համար',
        description: 'Գերթեթև հեղուկ հայլայթեր, որն անդրադարձնում է լույսը՝ հաղորդելով մաշկին բնական «ապակե» փայլ: Կարող է օգտագործվել առանձին, խառնվել խոնավեցնող կրեմի հետ կամ քսվել դեմքի բարձր կետերին:',
        ingredients: 'Միկա, Արևածաղկի Յուղ, Խաղողի Կորիզի Յուղ, Վարդի Մզվածք, Վիտամին E, Բնական Փայլեր:',
        usage: 'Քսել 1-2 կաթիլ այտոսկրերին, հոնքերի տակ և քթի երկայնքով: Տարածել մատներով կամ սպունգով՝ աննկատ սահուն փայլ ստանալու համար:'
      }
    }
  },
  {
    id: 6,
    category: 'skincare',
    image: '/monly_cream.png',
    price: 9500,
    translations: {
      en: {
        name: 'Ceramide Barrier Balm',
        tagline: 'Deep barrier restoration & dry skin rescue',
        description: 'An intensive balm formulated to rescue dry, damaged skin. Enriched with ceramides, squalane, and chamomile, it creates a breathable protective layer that locks in moisture and repairs redness.',
        ingredients: 'Ceramide EOP, Ceramide AP, Squalane (derived from olives), Chamomile Oil, Calendula Extract, Beeswax, Vitamin E.',
        usage: 'Warm a small amount between fingertips and press gently onto dry areas of the face, elbows, or hands. Use as needed.'
      },
      hy: {
        name: 'Կերամիդային Վերականգնող Բալզամ',
        tagline: 'Մաշկի պատնեշի վերականգնում և չոր մաշկի փրկություն',
        description: 'Ինտենսիվ բալզամ՝ նախատեսված չոր և վնասված մաշկի համար: Հարստացված է կերամիդներով, սկվալանով և երիցուկի յուղով, այն ստեղծում է շնչող պաշտպանիչ շերտ, որը պահում է խոնավությունը:',
        ingredients: 'Կերամիդ EOP, Կերամիդ AP, Սկվալան, Երիցուկի Յուղ, Կալենդուլայի Մզվածք, Մեղրամոմ, Վիտամին E:',
        usage: 'Փոքր քանակությամբ բալզամը տաքացնել մատների արանքում և մեղմորեն սեղմել դեմքի չոր հատվածներին կամ ձեռքերին: Օգտագործել ըստ անհրաժեշտության:'
      }
    }
  }
];

export const translations = {
  en: {
    brandName: 'Monly',
    brandSubtitle: 'Cosmetics | Skincare',
    nav: {
      home: 'Home',
      shop: 'Shop',
      about: 'About',
      quiz: 'Routine Finder',
      instagram: 'Gallery',
      contact: 'Book consultation'
    },
    hero: {
      slogan: 'Pure ingredients. Ultimate radiance.',
      quote: '“A smile is the best makeup any girl can wear.”',
      quoteAuthor: '– Marilyn Monroe ✨',
      ctaShop: 'Shop Cosmetics',
      ctaQuiz: 'Find Your Routine'
    },
    about: {
      title: 'Our Skincare Philosophy',
      subtitle: 'Created in Yerevan, Monly merges natural plant botanical extracts with dermatologically backed clean science to restore skin health and enhance your natural smile.',
      card1Title: '100% Organic & Clean',
      card1Desc: 'We source pure floral distillates and organic cold-pressed oils, ensuring zero artificial parabens or sulfates.',
      card2Title: 'Dermatologist Tested',
      card2Desc: 'Every formula is clinically researched to ensure maximum safety, especially for sensitive and reactive skin types.',
      card3Title: 'Cruelty-Free Always',
      card3Desc: 'We love animals as much as we love glowing skin. Absolutely none of our formulations are tested on animals.'
    },
    shop: {
      title: 'Curated Skincare & Cosmetics',
      filterAll: 'All Products',
      filterSkincare: 'Skincare',
      filterCosmetics: 'Cosmetics',
      addToCart: 'Add to Cart',
      added: 'Added ✔',
      quickView: 'Quick View',
      currency: 'AMD'
    },
    modal: {
      close: 'Close',
      ingredients: 'Ingredients',
      usage: 'How to use',
      benefits: 'Skin Benefits',
      addToCart: 'Add to Cart'
    },
    quiz: {
      title: 'Personalized Skincare Routine Finder',
      introTitle: 'Discover Your Perfect Routine',
      introDesc: 'Answer 3 quick questions about your skin, and our GSAP-powered algorithm will curate a custom Monly 3-step routine designed specifically for your skin concerns.',
      start: 'Start Routine Finder',
      step: 'Question',
      next: 'Next Question',
      prev: 'Previous',
      resultTitle: 'Your Curated Monly Routine',
      resultDesc: 'Based on your profile, we recommend this perfect synergy of cleanser, treatment, and barrier support. Get them together with an exclusive 15% package discount!',
      originalPrice: 'Original Price',
      packagePrice: 'Bundle Price (15% Off)',
      addBundle: 'Add Full Routine to Cart',
      restart: 'Retake Quiz',
      questions: [
        {
          id: 'skinType',
          text: 'What is your current skin type?',
          options: [
            { value: 'dry', label: 'Dry / Dehydrated (feels tight, flaking)' },
            { value: 'oily', label: 'Oily / Combination (shiny T-zone, pores)' },
            { value: 'sensitive', label: 'Sensitive / Reactive (redness, irritation)' }
          ]
        },
        {
          id: 'skinConcern',
          text: 'What is your primary skin concern?',
          options: [
            { value: 'hydration', label: 'Lacking moisture and dull appearance' },
            { value: 'barrier', label: 'Redness, inflammation, damaged barrier' },
            { value: 'glow', label: 'Uneven tone, spots, wanting a radiant glow' }
          ]
        },
        {
          id: 'texture',
          text: 'What texture do you prefer for moisturizers?',
          options: [
            { value: 'light', label: 'Light gel-creams that absorb instantly' },
            { value: 'rich', label: 'Rich, comforting balms and velvety creams' }
          ]
        }
      ]
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is currently empty.',
      subtotal: 'Subtotal',
      checkout: 'Checkout & Place Order',
      itemCount: 'items',
      formTitle: 'Complete Your Order',
      fullName: 'Full Name',
      phone: 'Phone Number (e.g., +374...)',
      address: 'Delivery Address (Yerevan / Regions)',
      methodLabel: 'Order Submission Method',
      methodWhatsapp: 'Submit Order via WhatsApp (Direct Chat)',
      methodSimulated: 'Place Order (Simulate Email / SMS)',
      placeOrder: 'Confirm and Send Order',
      backToCart: 'Back to Cart',
      successTitle: 'Order Placed Successfully!',
      successDesc: 'Thank you for shopping with Monly! We have received your order details and our manager will contact you shortly to confirm the delivery time.'
    },
    instagram: {
      title: 'Aesthetic Life on Instagram',
      subtitle: '@monly.yvn • 5,215 Followers • 58 Posts',
      follow: 'Follow on Instagram'
    },
    contact: {
      title: 'Book a Skincare Consultation',
      subtitle: 'Unsure what your skin needs? Fill out our consultation request, and a Monly skincare specialist will recommend a routine within 24 hours.',
      fullName: 'Full Name',
      email: 'Email Address',
      skinNotes: 'Describe your skin and main concerns',
      bookBtn: 'Book Consultation',
      successMsg: 'Consultation request submitted! A specialist will contact you via email shortly.',
      locationTitle: 'Monly HQ',
      locationDesc: 'Yerevan, Armenia',
      hoursTitle: 'Opening Hours',
      hoursDesc: 'Mon – Sat: 10:00 AM – 8:00 PM • Sun: Closed'
    },
    footer: {
      aboutText: 'Monly is committed to bringing out your ultimate radiance with clean formulas and organic ingredients.',
      quickLinks: 'Quick Links',
      copyright: '© 2026 Monly Cosmetics. Made with love in Armenia.'
    }
  },
  hy: {
    brandName: 'Մոնլի',
    brandSubtitle: 'Կոսմետիկա | Մաշկի Խնամք',
    nav: {
      home: 'Գլխավոր',
      shop: 'Խանութ',
      about: 'Մեր Մասին',
      quiz: 'Խնամքի Ընտրություն',
      instagram: 'Պատկերասրահ',
      contact: 'Խորհրդատվություն'
    },
    hero: {
      slogan: 'Մաքուր բաղադրիչներ: Անկրկնելի փայլ:',
      quote: '«Ժպիտը լավագույն դիմահարդարումն է, որը յուրաքանչյուր աղջիկ կարող է կրել:»',
      quoteAuthor: '– Մերիլին Մոնրո ✨',
      ctaShop: 'Տեսնել Կոսմետիկան',
      ctaQuiz: 'Ընտրել Խնամքը'
    },
    about: {
      title: 'Մաշկի Խնամքի Մեր Փիլիսոփայությունը',
      subtitle: 'Ստեղծված Երևանում՝ Մոնլին համատեղում է բնական բուսական մզվածքները և մաշկաբանորեն ապացուցված գիտությունը՝ վերականգնելու մաշկի առողջությունը և ընդգծելու ձեր ժպիտը:',
      card1Title: '100% Օրգանական և Մաքուր',
      card1Desc: 'Մենք օգտագործում ենք մաքուր ծաղկային թորվածքներ և օրգանական սառը սեղմման յուղեր՝ առանց արհեստական պարաբենների կամ սուլֆատների:',
      card2Title: 'Մաշկաբանորեն Փորձարկված',
      card2Desc: 'Յուրաքանչյուր բանաձև կլինիկական հետազոտություն է անցնում՝ ապահովելու առավելագույն անվտանգություն, հատկապես զգայուն մաշկի համար:',
      card3Title: 'Միշտ Էթիկական (Cruelty-Free)',
      card3Desc: 'Մենք սիրում ենք կենդանիներին այնքան, որքան առողջ մաշկը: Մեր արտադրանքներից և ոչ մեկը չի փորձարկվում կենդանիների վրա:',
    },
    shop: {
      title: 'Մաշկի Խնամք և Կոսմետիկա',
      filterAll: 'Բոլորը',
      filterSkincare: 'Մաշկի Խնամք',
      filterCosmetics: 'Կոսմետիկա',
      addToCart: 'Ավելացնել Զամբյուղ',
      added: 'Ավելացված է ✔',
      quickView: 'Արագ Դիտում',
      currency: 'դրամ'
    },
    modal: {
      close: 'Փակել',
      ingredients: 'Բաղադրություն',
      usage: 'Օգտագործման եղանակ',
      benefits: 'Ազդեցությունը',
      addToCart: 'Ավելացնել Զամբյուղ'
    },
    quiz: {
      title: 'Մաշկի Խնամքի Անհատական Ընտրություն',
      introTitle: 'Գտեք Ձեր Կատարյալ Խնամքը',
      introDesc: 'Պատասխանեք մաշկի մասին 3 կարճ հարցի, և մեր GSAP-ի վրա հիմնված ալգորիթմը կառաջարկի Մոնլիի 3 քայլից բաղկացած անհատական խնամքի փաթեթ:',
      start: 'Սկսել Թեստը',
      step: 'Հարց',
      next: 'Հաջորդը',
      prev: 'Նախորդը',
      resultTitle: 'Ձեր Մոնլի Խնամքի Փաթեթը',
      resultDesc: 'Հիմնվելով ձեր պատասխանների վրա՝ խորհուրդ ենք տալիս մաքրող միջոցի, շիճուկի և սնուցող կրեմի այս կատարյալ համադրությունը: Ձեռք բերեք միասին հատուկ 15% զեղչով:',
      originalPrice: 'Սովորական Գին',
      packagePrice: 'Փաթեթի Գինը (15% Զեղչ)',
      addBundle: 'Ավելացնել Ամբողջ Փաթեթը Զամբյուղ',
      restart: 'Անցնել Կրկին',
      questions: [
        {
          id: 'skinType',
          text: 'Որն է Ձեր մաշկի տիպը:',
          options: [
            { value: 'dry', label: 'Չոր / Ջրազրկված (ձգվածության զգացում, թեփոտում)' },
            { value: 'oily', label: 'Յուղոտ / Խառը (փայլուն T-գոտի, լայնացած ծակոտիներ)' },
            { value: 'sensitive', label: 'Զգայուն / Գրգռվող (կարմրություն, քոր)' }
          ]
        },
        {
          id: 'skinConcern',
          text: 'Որն է Ձեր մաշկի հիմնական խնդիրը:',
          options: [
            { value: 'hydration', label: 'Խոնավության պակաս և անփայլ մաշկ' },
            { value: 'barrier', label: 'Կարմրություն, բորբոքումներ, վնասված պատնեշ' },
            { value: 'glow', label: 'Անհավասար երանգ, պիգմենտացիա, փայլի պակաս' }
          ]
        },
        {
          id: 'texture',
          text: 'Ինչպիսի կառուցվածք եք նախընտրում խոնավեցնող միջոցների համար:',
          options: [
            { value: 'light', label: 'Թեթև գել-կրեմներ, որոնք ակնթարթորեն ներծծվում են' },
            { value: 'rich', label: 'Հարուստ, սնուցող բալզամներ և թավշյա կրեմներ' }
          ]
        }
      ]
    },
    cart: {
      title: 'Զամբյուղ',
      empty: 'Ձեր զամբյուղը դատարկ է:',
      subtotal: 'Ընդհանուր',
      checkout: 'Ձևակերպել Պատվեր',
      itemCount: 'ապրանք',
      formTitle: 'Լրացնել Պատվերի Տվյալները',
      fullName: 'Անուն Ազգանուն',
      phone: 'Հեռախոսահամար (օր.՝ +374...)',
      address: 'Առաքման Հասցե (Երևան / Մարզեր)',
      methodLabel: 'Պատվերի Ուղարկման Տարբերակ',
      methodWhatsapp: 'Ուղարկել Պատվերը WhatsApp-ով (Ուղիղ կապ)',
      methodSimulated: 'Հաստատել Պատվերը (Էլ. փոստով / SMS)',
      placeOrder: 'Հաստատել Պատվերը',
      backToCart: 'Վերադառնալ Զամբյուղ',
      successTitle: 'Պատվերը Հաջողությամբ Գրանցվեց:',
      successDesc: 'Շնորհակալություն Մոնլիից գնումներ կատարելու համար: Ձեր պատվերն ընդունված է, մեր մենեջերը շուտով կապ կհաստատի Ձեզ հետ՝ առաքման մանրամասները ճշտելու համար:'
    },
    instagram: {
      title: 'Էսթետիկ Կյանքը Instagram-ում',
      subtitle: '@monly.yvn • 5,215 Հետևորդ • 58 Հրապարակում',
      follow: 'Հետևել Instagram-ում'
    },
    contact: {
      title: 'Գրանցվել Մաշկի Խորհրդատվության',
      subtitle: 'Վստահ չե՞ք, թե ինչ է անհրաժեշտ ձեր մաշկին: Լրացրեք հայտը, և Մոնլիի մասնագետը կառաջարկի համապատասխան խնամք 24 ժամվա ընթացքում:',
      fullName: 'Անուն Ազգանուն',
      email: 'Էլ. Փոստ',
      skinNotes: 'Նկարագրեք ձեր մաշկը և հիմնական խնդիրները',
      bookBtn: 'Գրանցվել Խորհրդատվության',
      successMsg: 'Խորհրդատվության հայտը հաջողությամբ ուղարկվեց: Մասնագետը կկապվի Ձեզ հետ էլ. փոստով:',
      locationTitle: 'Մոնլի Գրասենյակ',
      locationDesc: 'Երևան, Հայաստան',
      hoursTitle: 'Աշխատանքային Ժամեր',
      hoursDesc: 'Երկ – Շաբ: 10:00 - 20:00 • Կիր: Փակ է'
    },
    footer: {
      aboutText: 'Մոնլին ձգտում է բացահայտել ձեր մաշկի բնական փայլը՝ մաքուր բանաձևերի և օրգանական բաղադրիչների միջոցով:',
      quickLinks: 'Արագ Հղումներ',
      copyright: '© 2026 Մոնլի Կոսմետիկա: Պատրաստված է սիրով Հայաստանում:'
    }
  }
};
