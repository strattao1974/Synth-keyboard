# Synth Keyboard

    A playable 2-octave synth keyboard built with HTML, CSS, and JavaScript using the Web Audio API. It features smooth note transitions, realistic key press states, and a Rhodes-style design.

    ## Installation

    1. Download or clone the repository.
    2. Include the following files in your project:
       - `index.html`
       - `style.css`
       - `script.js`

    ## Usage

    1. Add the following HTML structure to your page:
       ```html
       <div class="keyboard-container">
         <div class="keyboard">
           <div class="white-keys">
             <div class="key" data-note="C4"></div>
             <div class="key" data-note="D4"></div>
             <div class="key" data-note="E4"></div>
             <div class="key" data-note="F4"></div>
             <div class="key" data-note="G4"></div>
             <div class="key" data-note="A4"></div>
             <div class="key" data-note="B4"></div>
             <div class="key" data-note="C5"></div>
             <div class="key" data-note="D5"></div>
             <div class="key" data-note="E5"></div>
             <div class="key" data-note="F5"></div>
             <div class="key" data-note="G5"></div>
             <div class="key" data-note="A5"></div>
             <div class="key" data-note="B5"></div>
           </div>
           <div class="black-keys">
             <div class="key" data-note="C#4"></div>
             <div class="key" data-note="D#4"></div>
             <div class="key" data-note="F#4"></div>
             <div class="key" data-note="G#4"></div>
             <div class="key" data-note="A#4"></div>
             <div class="key" data-note="C#5"></div>
             <div class="key" data-note="D#5"></div>
             <div class="key" data-note="F#5"></div>
             <div class="key" data-note="G#5"></div>
             <div class="key" data-note="A#5"></div>
           </div>
         </div>
       </div>
       ```

    2. Include the CSS and JavaScript files:
       ```html
       <link rel="stylesheet" href="style.css">
       <script src="script.js"></script>
       ```

    ## Features

    - **2 Octaves**: C4 to B5 range
    - **Smooth Transitions**: Gentle attack and release
    - **Mouse Interaction**: Click and drag to play notes
    - **Visual Feedback**: Keys light up when pressed
    - **Rhodes Style**: Stylish design inspired by classic keyboards

    ## Customization

    - **Sound Type**: Modify the `oscillator.type` in `script.js` (options: 'sine', 'square', 'sawtooth', 'triangle')
    - **Keyboard Size**: Adjust the dimensions in `style.css`
    - **Color Scheme**: Modify the color values in `style.css`

    ## Browser Compatibility

    The synth keyboard works in all modern browsers that support the Web Audio API. For older browsers, consider using a polyfill.

    ## License

    MIT License - Free to use and modify for personal and commercial projects.
