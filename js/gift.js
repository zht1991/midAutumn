// 三个人物的信息
var characterDesc = [{
        legendName: '嫦娥奔月',
        legendDesc: '传说嫦娥本是后羿之妻，后羿射下九个太阳后西王母赐其不老仙药，但后羿不舍得吃下，就交于嫦娥保管。' +
            '后羿门徒蓬蒙觊觎仙药，逼迫嫦娥交出仙药，嫦娥无奈情急之下吞下仙药，便向天上飞去。当日正是八月十五，' +
            '月亮又大又亮，因不舍后羿，嫦娥就停在了离地球最近的月亮，从此长居广寒宫。后羿回家后心痛不止，' +
            '于是每年八月十五便摆下宴席对着月亮与嫦娥团聚。',
        legendImg: '12.png'
    },
    {
        legendName: '后羿造饼',
        legendDesc: '嫦娥到了月宫后，异常思念丈夫，而后羿也日思夜想，期望能再见到妻子。' +
            '一天，一位仙人向后羿指点了方法：在八月十五月圆之夜，用面粉作丸，团成如圆月的形状，' +
            '放在屋子的西北方向，然后再连续呼唤嫦娥的名字，三更时分，嫦娥就可以回家团聚。后羿照做，' +
            '果然见到了从月亮中飞来的嫦娥，夫妻重圆。这种面粉做出的圆团后来就演变成了各式月饼。',
        legendImg: '13.png'
    },
    {
        legendName: '吴刚伐桂',
        legendDesc: '传说吴刚的妻子与炎帝之孙伯陵私通，吴刚一怒之下杀了伯陵，因而惹怒太阳神炎帝，' +
            '被发配到月亮砍伐不死之树。但月桂树随砍即合，吴刚每砍一斧，斧子砍下的枝叶就会长回树上，' +
            '经过了这么久，吴刚仍然没能砍倒月桂树。吴刚的妻子心存愧疚，命她的三个儿子分别变成蟾蜍、' +
            '兔和蛇飞上月亮陪伴吴刚。为了帮助父亲早日砍倒桂树，玉兔便不停的把砍下的枝叶捣碎。',
        legendImg: '11.png'
    },
];
addForEachToNodeList();
var cd = document.querySelectorAll('.character-desc')[0];

// 动态显示人物信息
function showCharactorDescription(obj) {
    var name = obj.getAttribute('data-name');
    var len = characterDesc.length;
    var descContent = '';
    for (var i = 0; i < len; i++) {
        if (characterDesc[i].legendName === name) {
            descContent += '<div class="character-desc-content-box">';
            descContent += '<div class="character-desc-content"><img src="../images/6.png" class="rule-close" onClick="closeDesc(this)" alt="">';
            descContent += '<h3 class="rule-title">' + characterDesc[i].legendName + '</h3>';
            descContent += '<div class="desc-content clearfix"><img src="../images/' + characterDesc[i].legendImg + '" alt="">';
            descContent += '<p>' + characterDesc[i].legendDesc + '</p></div></div></div>';
            cd.innerHTML = descContent;
            cd.style.display = 'block';
        }
    }
}

//为NodeList添加forEach方法 
function addForEachToNodeList() {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this)
            }
        }
    }
}

// 隐藏人物信息
function closeDesc() {
    cd.innerHTML = '';
    cd.style.display = 'none';
}

// 绑定点击事件，点击查看人物信息
document.querySelectorAll('.select-btn').forEach(function (value, index) {
    value.addEventListener('click', function (e) {
        showCharactorDescription(e.target);
    }, false)
})