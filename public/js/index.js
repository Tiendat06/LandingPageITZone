import site from './site.js';
import achievement from './achievement.js'

window.homeSlideQuest = () => {
    site.homeSlideQuest();
}
window.showAchievementByYear = () => {
    achievement.showAchievementByYear();
}
window.handleButtonWhenClick = () => {
    achievement.handleButtonWhenClick();
}

site.checkPathName();