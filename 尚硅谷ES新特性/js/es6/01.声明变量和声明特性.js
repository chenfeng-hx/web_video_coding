// let
{
    // 1. 声明变量
    let word;
    let word1, word2;


    // 2. 不能重复声明
    // let a = 1;
    let a = 2;    // 报错

    // 3. 块级作用域
    {
        let name = "xiaoli";
    }
    console.log(name);    // undefined

    // 4. 不存在变量提升
    console.log(str);
    let str = "string";   // 报错

    // 5. 不影响作用域链的效果
    {
        let school = "xiaoxu";
        function name1() {
            console.log(school);
        };
        name1();
    }
}

// const
{
    // 定义常量
    const name = "xiaohua";

    // 一定要赋初始值
    const s;

    // 一般使用大写（潜规则）
    const T = 1;

    // 常量的值不能修改
    const m = 1;
    const m = 2;

    // 块儿级作用域
    {
        const age = 20;
    }
    console.log(20);

    // 定义数组或对象较为稳妥
    const arr = [];
    arr.push("xiaoming");
}

