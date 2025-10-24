// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有应用卡片
    const appCards = document.querySelectorAll('.app-card');
    
    // 为每个卡片添加点击事件
    appCards.forEach(card => {
        card.addEventListener('click', function() {
            const appName = this.getAttribute('data-app');
            
            // 根据应用名称跳转到对应的页面
            switch(appName) {
                case 'quiz-game':
                    window.location.href = './quiz-game/index.html';
                    break;
                case 'todo-list':
                    window.location.href = './todo-list/index.html';
                    break;
                case 'form-validator':
                    window.location.href = './form-validator/index.html';
                    break;
                case 'password-generator':
                    window.location.href = './password-generator/index1.html';
                    break;
                case 'recipe-finder':
                    window.location.href = './recipe-finder/index.html';
                    break;
                default:
                    console.log('Unknown app:', appName);
            }
        });
        
        // 添加键盘支持（回车键）
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
        
        // 设置tabindex使卡片可以通过键盘导航
        card.setAttribute('tabindex', '0');
    });
    
    // 添加页面加载动画
    const cards = document.querySelectorAll('.app-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 添加平滑滚动效果
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // 处理图片加载错误
    const images = document.querySelectorAll('.card-image img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // 如果图片加载失败，显示占位符
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBzdHJva2U9IiNEOUQ5RDkiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTMwIDkwTDE0MCA4MEwxNTAgOTBMMTYwIDgwTDE3MCA5MEwxNzAgMTEwTDEzMCAxMTBMMTMwIDkwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8dGV4dCB4PSIxNTAiIHk9IjE0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OTk5OSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
            this.alt = 'Image not found';
        });
    });
});
