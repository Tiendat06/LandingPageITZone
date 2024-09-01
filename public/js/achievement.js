class Achievement {
    constructor() {
    }

    showAchievementByYear = () => {
        const achievement2024 = $(".achievement-table__info--2024")
        const achievement2023 = $(".achievement-table__info--2023")
        $("input[name=radio-achievement]").change(() => {
            achievement2024.hide()
            achievement2023.hide()
            if ($("#radio-all").is(":checked")) {
                achievement2024.fadeIn()
                achievement2023.fadeIn()
            }
            if ($("#radio-2024").is(":checked")) {
                achievement2024.fadeIn()
            }
            if ($("#radio-2023").is(":checked")) {
                achievement2023.fadeIn()
            }

        })
    }

    handleButtonWhenClick = () => {
        const awardInfo2024 = $('.achievement-table__info--2024-award');
        const awardInfo2023 = $('.achievement-table__info--2023-award');
        let handleButton = function () {
            const currentFrame = $(this).find('[class$="award__frame"]');
            const currentName = $(this).find('[class$="award__name"]');
            const dropdownContent = $(this).find('[class$="award__content"]');

            const imagePath = currentFrame.attr("src");
            if (imagePath === ".\\public\\img\\achievement\\award.png") {
                currentFrame.attr("src", ".\\public\\img\\achievement\\award_click.png");
                currentName.css("color", "#fff");
            } else {
                currentFrame.attr("src", ".\\public\\img\\achievement\\award.png");
                currentName.css("color", "#564A87");
            }

            dropdownContent.slideToggle();
        };

        awardInfo2024.click(handleButton)
        awardInfo2023.click(handleButton)
    }
}

export default new Achievement;