import './app-icon.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    .icon-container {
      position: relative;
      padding: 4px 16px;
      width: max-content;
      border-radius: 100px;
      transition: 0.5s;
    }
    
    .icon-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #DFE3E7;
      opacity: 0;
      border-radius: inherit;
      transition: opacity 0.5s;
    }
    
    .icon-container:hover::before {
      opacity: 0.05;
    }
    
    .icon-container:hover > .icon {
      transform-origin: 50% 50%;
      transform: scale(1.05);
      fill: #DFE3E7;
    }
    
    .button:hover > .button-text {
      color: #DFE3E7;
    }
    
    .icon {
      position: relative;
      font-size: 24px;
      font-weight: lighter;
      letter-spacing: 1px;
      height: max-content;
      width: max-content;
      transition: 0.5s;
    }
    
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
    }
    
    .button:hover {
      cursor: pointer;
    }
    
    .button-text {
      font-size: 11px;
      margin-top: 4px;
      transition: 0.5s;
    }

  </style>
  <style id="dynamic-styles"></style>

  <div class="button">
    <div class="icon-container">
        <div class="icon">
            <app-icon icon=""></app-icon>
        </div>
    </div>
    <span class="button-text"></span>
  </div>
`;

class AppSidebarButton extends HTMLElement {
    static observedAttributes = ['isSelected'];

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const buttonText = this.shadowRoot.querySelector('.button-text');
        const appIcon = this.shadowRoot.querySelector('app-icon');

        const icon = this.getAttribute('icon');
        const text = this.getAttribute('text');
        appIcon.setAttribute('icon', icon);
        buttonText.textContent = text;

        const isSelected = this.getAttribute('isSelected') === 'true';
        const hoverColor = "var(--md-sys-color-on-surface-variant)";
        const contentColorVariant = "var(--md-sys-color-on-surface-variant)";
        const contentColor = isSelected ? "var(--md-sys-color-on-surface)" : contentColorVariant;
        const containerColor = isSelected ? "var(--md-sys-color-primary-container)" : '';

        this.updateStyles(contentColor, containerColor, hoverColor);
    }

    updateStyles(contentColor, containerColor, hoverColor) {
        const styleTag = this.shadowRoot.querySelector('#dynamic-styles');
        styleTag.textContent = `
          .button-text {
            color: ${contentColor};
          }
          .icon {
            fill: ${contentColor};
          }
          .icon-container {
            background-color: ${containerColor};
          }
          .icon-container::before {
            background-color: ${hoverColor};
          }
          .icon-container:hover::before {
            opacity: 0.05;
          }
          .icon-container:hover > .icon {
            fill: ${hoverColor};
          }
          .button:hover > .button-text {
            color: ${hoverColor};
          }
        `;
    }
}

window.customElements.define('app-sidebar-button', AppSidebarButton);