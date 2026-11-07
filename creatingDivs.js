function createDiv()
{
    const newDiv = document.createElement("div");
    return newDiv;
}

function buildGrid(sizeOfTheGrid)
{
    const container = document.querySelector('.container')
    for(let i = 1 ; i <= sizeOfTheGrid ; i++)
    {
        for(let j = 1 ; j <= sizeOfTheGrid ; j++)
        {
            container.append(createDiv());
        }
    }
}

function coloringTheCells()
{
    const sq = document.querySelectorAll('.container div')
    
    sq.forEach((sq) => {
        const randomXforRGB = Math.random() * 256;
        const randomYforRGB = Math.random() * 256;
        const randomZforRGB = Math.trunc(Math.random() * 256);
        sq.addEventListener("mouseenter" , (e) => {
            e.target.style.background = "rgb(" + randomXforRGB + ","  + randomYforRGB + "," + randomZforRGB + ")";
        })
        
    })
}

function run()
{
    buildGrid(16);
    coloringTheCells();
    const button = document.querySelector("button")

    button.addEventListener("click" , (e)=>{
        const div = document.querySelectorAll('.container div')
        div.forEach((div)=>{
            div.remove();
        })
        
        buildGrid(prompt('Enter the size of the grid'));
        coloringTheCells();
    })
}

run()