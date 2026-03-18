const dynasties = [
    {
        name: "夏",
        time: "约公元前2070年 - 约公元前1600年",
        founder: "禹",
        capital: "阳城、斟鄩",
        events: "大禹治水、家天下制度确立",
        status: "中国史书中记载的第一个世袭制朝代，但考古学上仍在探索中。"
    },
    {
        name: "商",
        time: "约公元前1600年 - 公元前1046年",
        founder: "汤",
        capital: "殷（今河南安阳）",
        events: "盘庚迁殷、甲骨文、青铜器",
        status: "中国第一个有直接的同时期的文字记载的朝代。"
    },
    {
        name: "西周",
        time: "公元前1046年 - 公元前771年",
        founder: "周武王",
        capital: "镐京（今陕西西安）",
        events: "分封制、宗法制、井田制",
        status: "奠定了中国传统社会结构和政治文化的基础。"
    },
    {
        name: "东周(春秋/战国)",
        time: "公元前770年 - 公元前221年",
        founder: "周平王",
        capital: "洛邑（今河南洛阳）",
        events: "春秋五霸、战国七雄、百家争鸣",
        status: "社会大变革时期，思想、文化、科技空前繁荣。"
    },
    {
        name: "秦",
        time: "公元前221年 - 公元前207年",
        founder: "秦始皇",
        capital: "咸阳",
        events: "统一六国、书同文、车同轨、郡县制、万里长城",
        status: "中国历史上第一个统一的、多民族的、中央集权的封建王朝。"
    },
    {
        name: "汉",
        time: "公元前202年 - 公元220年",
        founder: "刘邦",
        capital: "长安、洛阳",
        events: "文景之治、汉武帝大一统、丝绸之路、独尊儒术",
        status: "汉族和汉文化由此得名，是当时世界上最强大的帝国之一。"
    },
    {
        name: "三国",
        time: "220年 - 280年",
        founder: "曹丕、刘备、孙权",
        capital: "洛阳、成都、建业",
        events: "赤壁之战、三国鼎立",
        status: "上承东汉下启西晋的一段历史时期。"
    },
    {
        name: "两晋",
        time: "266年 - 420年",
        founder: "司马炎",
        capital: "洛阳、建康",
        events: "八王之乱、五胡乱华、衣冠南渡",
        status: "门阀政治达到顶峰，北方陷入长期战乱。"
    },
    {
        name: "南北朝",
        time: "420年 - 589年",
        founder: "多个政权",
        capital: "建康、平城/洛阳",
        events: "北魏孝文帝改革、民族大融合",
        status: "中国南北分治时期，也是民族、文化大融合的重要阶段。"
    },
    {
        name: "隋",
        time: "581年 - 618年",
        founder: "杨坚",
        capital: "大兴（长安）",
        events: "统一中国、创立科举制、开凿大运河",
        status: "结束了长达近三百年的分裂局面，但因暴政而短暂。"
    },
    {
        name: "唐",
        time: "618年 - 907年",
        founder: "李渊",
        capital: "长安",
        events: "贞观之治、开元盛世、安史之乱、唐诗",
        status: "中国古代史上的黄金时代，国力强盛，文化繁荣，对周边国家影响深远。"
    },
    {
        name: "五代十国",
        time: "907年 - 960年",
        founder: "多个政权",
        capital: "多个",
        events: "政权更迭频繁",
        status: "唐末藩镇割据的延续和扩大，是唐宋之间的过渡期。"
    },
    {
        name: "宋",
        time: "960年 - 1279年",
        founder: "赵匡胤",
        capital: "开封、临安",
        events: "杯酒释兵权、王安石变法、靖康之耻、活字印刷术",
        status: "经济、文化、科技高度发达，但军事上相对孱弱。"
    },
    {
        name: "元",
        time: "1271年 - 1368年",
        founder: "忽必烈",
        capital: "大都（今北京）",
        events: "蒙古帝国、行省制度、马可·波罗来华",
        status: "由蒙古族建立的统一王朝，疆域空前辽阔。"
    },
    {
        name: "明",
        time: "1368年 - 1644年",
        founder: "朱元璋",
        capital: "南京、北京",
        events: "郑和下西洋、内阁制度、资本主义萌芽",
        status: "汉族建立的最后一个大一统王朝，前期国力强盛。"
    },
    {
        name: "清",
        time: "1636年 - 1912年",
        founder: "皇太极",
        capital: "北京",
        events: "康乾盛世、闭关锁国、鸦片战争",
        status: "中国历史上最后一个封建王朝，奠定了现代中国的版图。"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const contentDisplay = document.getElementById('content-display');

    // 动态生成时间轴
    dynasties.forEach((dynasty, index) => {
        const dynastyElement = document.createElement('div');
        dynastyElement.classList.add('dynasty');
        dynastyElement.textContent = dynasty.name;
        dynastyElement.dataset.index = index;
        timeline.appendChild(dynastyElement);
    });

    // 点击事件委托
    timeline.addEventListener('click', (event) => {
        if (event.target.classList.contains('dynasty')) {
            const allDynasties = document.querySelectorAll('.dynasty');
            allDynasties.forEach(d => d.classList.remove('active'));
            event.target.classList.add('active');
            
            const index = event.target.dataset.index;
            updateContent(index);
        }
    });

    // 更新内容区域
    function updateContent(index) {
        const dynasty = dynasties[index];
        contentDisplay.innerHTML = `
            <h2>${dynasty.name}</h2>
            <p><strong>存续时间：</strong>${dynasty.time}</p>
            <p><strong>建立者 & 都城：</strong>${dynasty.founder} & ${dynasty.capital}</p>
            <p><strong>重要事件 / 制度：</strong>${dynasty.events}</p>
            <p><strong>历史地位与影响：</strong>${dynasty.status}</p>
            <button id="read-aloud-btn">朗读讲解</button>
        `;
        contentDisplay.classList.add('fade-in');
        setTimeout(() => contentDisplay.classList.remove('fade-in'), 500);

        // 朗读按钮事件
        document.getElementById('read-aloud-btn').addEventListener('click', () => {
            const textToRead = `
                朝代：${dynasty.name}。
                存续时间：${dynasty.time}。
                建立者与都城：${dynasty.founder}，${dynasty.capital}。
                重要事件与制度：${dynasty.events}。
                历史地位与影响：${dynasty.status}。
            `;
            speak(textToRead);
        });
    }

    // 语音合成
    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            window.speechSynthesis.cancel(); // 取消之前的朗读
            window.speechSynthesis.speak(utterance);
        } else {
            alert('抱歉，您的浏览器不支持语音朗读功能。');
        }
    }

    // 默认显示第一个朝代
    if (dynasties.length > 0) {
        document.querySelector('.dynasty').classList.add('active');
        updateContent(0);
    }
});
