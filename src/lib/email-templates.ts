
export const getDiagnosisEmailTemplate = (name: string, score: number, pillars: any) => {
    let tier = "";
    let color = "";
    let advice = [];
    let subject = "";

    if (score <= 40) {
        tier = "مرحلة الخطر (الفوضى)";
        color = "#ef4444"; // Red
        subject = "⚠️ تقرير تشخيص شركتك: مطلوب تدخل عاجل";
        advice = [
            "🛑 **نزيف الوقت:** توقف عن القيام بكل شيء بنفسك. ابدأ بتفويض المهام الروتينية فوراً.",
            "💰 **المالية:** افصل مالية الشركة عن جيبك الشخصي اليوم. هذا هو السبب الأول لتعثر الشركات الصغيرة.",
            "📉 **المبيعات:** لا تعتمد على الصدفة. اكتب 'عملية بيع' بسيطة من 3 خطوات واجعل فريقك يلتزم بها."
        ];
    } else if (score <= 70) {
        tier = "مرحلة النجاة (عنق الزجاجة)";
        color = "#ca8a04"; // Yellow/Gold
        subject = "🚧 تقرير تشخيص شركتك: خطوات لكسر عنق الزجاجة";
        advice = [
            "⚙️ **التشغيل:** المشكلة ليست في الفريق، بل في النظام. ابدأ بكتابة أدلة تشغيل (SOPs) لأهم 20% من المهام.",
            "📢 **التسويق:** 'توصيات الأصدقاء' ليست خطة تسويقية. خصص ميزانية صغيرة (Testing Budget) لتجربة قناة تسويقية جديدة.",
            "📊 **الأرقام:** لا تقد السيارة وأنت معصوب العينين. حدد 3 مؤشرات أداء (KPIs) وراقبها أسبوعياً."
        ];
    } else {
        tier = "مرحلة القوة (جاهز للتوسع)";
        color = "#10b981"; // Green
        subject = "🚀 تقرير تشخيص شركتك: أنت جاهز للإنطلاق";
        advice = [
            "🌍 **التوسع:** نظامك قوي. هل فكرت في فتح فرع جديد أو استهداف شريحة عملاء مختلفة؟",
            "🤝 **القيادة:** دورك الآن هو 'صناعة القادة' وليس فقط إدارة الموظفين. استثمر في تدريب الصف الثاني.",
            "🤖 **الأتمتة:** ابحث عن أي مهمة يدوية متبقية وحاول أتمتتها بالكامل لتوفير وقتك للتفكير الاستراتيجي."
        ];
    }

    return {
        subject,
        html: `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f9fafb; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background-color: #1e293b; padding: 30px; text-align: center; color: white; }
            .logo { font-size: 24px; font-weight: bold; color: #fbbf24; text-decoration: none; }
            .content { padding: 30px; }
            .score-card { background-color: #f3f4f6; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 30px; border: 2px solid ${color}; }
            .score-circle { display: inline-block; width: 100px; height: 100px; line-height: 100px; border-radius: 50%; background-color: ${color}; color: white; font-size: 32px; font-weight: bold; margin-bottom: 10px; }
            .tier-title { font-size: 22px; font-weight: bold; color: ${color}; margin: 10px 0; }
            .advice-box { background-color: #f0fdf4; border-right: 4px solid #10b981; padding: 15px; margin-bottom: 20px; text-align: right; }
            .btn { display: inline-block; background-color: #fbbf24; color: #1e293b; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
            .footer { background-color: #e2e8f0; padding: 20px; text-align: center; font-size: 14px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
               <h1>محمد ربيع</h1>
               <p>استشاري تطوير الأعمال وبناء الأنظمة</p>
            </div>
            
            <div class="content">
              <p>أهلاً بك يا <strong>${name}</strong>،</p>
              <p>شكراً لاستخدامك أداة "مقياس صحة البيزنس". بناءً على إجاباتك، قمنا بتحليل وضع شركتك الحالي.</p>
              
              <div class="score-card">
                 <div class="score-circle">${score}%</div>
                 <div class="tier-title">${tier}</div>
                 <p>هذا المؤشر يعكس مدى جاهزية أنظمتك الحالية للنمو والاستدامة.</p>
              </div>

              <h3>🔍 أهم 3 نصائح لك الآن:</h3>
              <ul style="list-style-type: none; padding: 0;">
                ${advice.map(tip => `<li style="background: #f8fafc; margin-bottom: 10px; padding: 15px; border-right: 4px solid ${color}; border-radius: 4px;">${tip}</li>`).join('')}
              </ul>

              <div style="text-align: center; margin-top: 30px;">
                <p>هل تريد تحويل هذه النصائح إلى خطة عمل واقعية؟</p>
                <a href="https://mohamed-rabie.com/contact" class="btn">احجز استشارتك المجانية الآن</a>
              </div>
            </div>

            <div class="footer">
              <p>ريو للحلول التسويقية - Rio Marketing Solutions</p>
              <p>القاهرة، مصر</p>
            </div>
          </div>
        </body>
      </html>
    `
    };
};

export const getAdminAlertTemplate = (name: string, email: string, phone: string, score: number, answers: any) => {
    // Helper to format answers
    const formattedAnswers = Object.entries(answers).map(([key, value]) => {
        const questionId = parseInt(key);
        // We might want to map Question ID to Text if we had the array here, 
        // but passing the full array might be heavy. 
        // For now, let's just show ID and Value (Yes/No).
        return `Question ${questionId}: ${value === 1 ? '✅ Yes' : '❌ No'}`;
    }).join('\n');

    return {
        subject: `🔔 New Lead: ${name} (Score: ${score}%)`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h1 style="color: #1e293b; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">New Logic Lead Alert</h1>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📱 Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>📊 Score:</strong> <span style="font-size: 1.2em; font-weight: bold; color: ${score > 70 ? 'green' : score > 40 ? 'orange' : 'red'}">${score}%</span></p>
        </div>

        <h3>📝 Diagnosis Breakdown:</h3>
        <div style="background-color: #1e293b; color: #fff; padding: 15px; border-radius: 8px; overflow-x: auto;">
            <pre style="margin: 0;">${formattedAnswers}</pre>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 20px;">
            This lead was generated from the generic "Business Health Diagnosis" tool.
        </p>
      </div>
    `
    };
};
