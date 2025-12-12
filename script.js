<script>
    const defaultConfig = {
      background_color: "#2D1B69",
      card_surface_color: "#FFFFFF",
      accent_color: "#8E44AD",
      text_color: "#4A148C",
      border_color: "#9C27B0",
      font_family: "Georgia",
      font_size: 16,
      main_greeting: "Happy Teachers' Day!",
      teacher_name: "Randy Bello",
      personal_message: "Hi sir kalmahan mo lang sana ang activity na ina hatag mo sa mga floppy birds love love lng po 😊",
      closing_text: "With gratitude and appreciation,",
      student_name: "Lenzy joy Lubedeses"
    };

    let config = { ...defaultConfig };

    async function onConfigChange(newConfig) {
      config = newConfig;

      const baseSize = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = "Georgia, serif";
      const fontFamily = `${customFont}, ${baseFontStack}`;

      document.body.style.backgroundColor = config.background_color;
      document.body.style.fontFamily = fontFamily;

      const card = document.getElementById("card");
      card.style.backgroundColor = config.card_surface_color;
      card.style.color = config.text_color;

      document.querySelectorAll(".decorative-corner").forEach(corner => {
        corner.style.color = config.accent_color;
      });

      const bookIcon = document.querySelector(".book-icon");
      bookIcon.style.color = config.accent_color;

      const greeting = document.getElementById("greeting");
      greeting.textContent = config.main_greeting;
      greeting.style.color = config.accent_color;
      greeting.style.fontSize = `${baseSize * 2.625}px`;

      const teacherName = document.getElementById("teacherName");
      teacherName.textContent = config.teacher_name;
      teacherName.style.color = config.text_color;
      teacherName.style.fontSize = `${baseSize * 2}px`;

      const message = document.getElementById("message");
      message.textContent = config.personal_message;
      message.style.color = config.text_color;
      message.style.fontSize = `${baseSize * 1.25}px`;

      const closingSection = document.getElementById("closingSection");
      closingSection.style.borderTopColor = config.border_color;

      const closing = document.getElementById("closing");
      closing.textContent = config.closing_text;
      closing.style.fontSize = `${baseSize * 1.125}px`;

      const studentName = document.getElementById("studentName");
      studentName.textContent = config.student_name;
      studentName.style.color = config.accent_color;
      studentName.style.fontSize = `${baseSize * 1.375}px`;
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          { get: () => config.background_color, set: v => window.elementSdk?.setConfig({ background_color: v }) },
          { get: () => config.card_surface_color, set: v => window.elementSdk?.setConfig({ card_surface_color: v }) },
          { get: () => config.accent_color, set: v => window.elementSdk?.setConfig({ accent_color: v }) },
          { get: () => config.text_color, set: v => window.elementSdk?.setConfig({ text_color: v }) },
          { get: () => config.border_color, set: v => window.elementSdk?.setConfig({ border_color: v }) }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family,
          set: v => window.elementSdk?.setConfig({ font_family: v })
        },
        fontSizeable: {
          get: () => config.font_size,
          set: v => window.elementSdk?.setConfig({ font_size: v })
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ["main_greeting", config.main_greeting],
        ["teacher_name", config.teacher_name],
        ["personal_message", config.personal_message],
        ["closing_text", config.closing_text],
        ["student_name", config.student_name]
      ]);
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }

    onConfigChange(defaultConfig);
</script>