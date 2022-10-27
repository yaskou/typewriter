class TypeWriter extends HTMLElement {
  constructor() {
    super();

    const template = this.getTemplate('#type-writer');

    const wrapper = template.querySelector('#wrapper');
    this.getAttribute('letters').split('').forEach((letter, index) => {
      const element = document.createElement('span');
      element.classList.add('letter');
      element.textContent = letter;

      setTimeout(() => {
        element.setAttribute('active', '');
      }, (index + 1) * 2000);

      wrapper.appendChild(element);
    });

    this.attachShadow({ mode: 'open' }).appendChild(template);
  }

  /**
   * Get clone template
   * @param {string} selector 
   * @return {HTMLElement}
   */
  getTemplate(selector) {
    /**
     * Get the template tag
     * @type {HTMLTemplateElement}
     */
    const templateTag = document.querySelector(selector);
    return templateTag.content.cloneNode(true);
  }
}
customElements.define('type-writer', TypeWriter);
