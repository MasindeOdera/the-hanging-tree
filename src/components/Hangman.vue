<template>
  <div class="hangman">
    <svg
      width="600"
      height="706"
      class="hangman-svg"
      :class="{ loading: isActive }"
      viewBox="0 0 888 706"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="HangmanTree">
        <rect width="888" height="706" />
        <g id="Tree">
          <path
            id="Vector_2"
            d="M443.32 113.373C443.32 113.373 443.32 114.753 441.83 119.733L443.32 113.373Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_3"
            d="M625.91 321.683C586.58 342.183 535.13 359.883 519.72 365.013C531.47 361.953 565.67 357.833 618.66 390.893C685.24 432.423 756.43 404.733 756.43 404.733C756.43 404.733 740.61 435.063 706.99 437.033C673.37 439.013 585.7 383.643 556.04 399.463C526.37 415.283 512.53 395.503 500.66 435.063C488.8 474.613 467.05 582.713 492.1 643.363L517.14 704.003H374.76C374.76 704.003 426.18 566.893 397.83 482.523C381.96 435.273 359.68 401.053 351.37 383.663C347.2 374.953 346.54 370.473 351.94 370.693C355.01 370.823 360.04 372.473 367.51 375.733C367.51 375.733 333.23 342.113 322.03 342.113C310.82 342.113 258.08 336.843 240.95 319.043C240.95 319.043 216.56 301.903 173.05 344.093C129.54 386.283 140.09 386.283 101.2 382.983C62.92 379.733 32.93 361.163 32 360.583C33.11 361.033 77.82 378.903 105.15 369.803C132.84 360.573 156.57 325.633 180.96 313.773C205.35 301.903 219.85 286.083 252.81 303.223L231.09 252.013L225.14 237.983L225.13 237.963C225.13 237.963 217.87 141.723 204.03 135.133C190.19 128.533 198.76 111.403 173.05 108.103C173.05 108.103 204.69 104.143 210.62 125.903C216.56 147.653 257.43 264.993 257.43 264.993C257.43 264.993 282.47 315.083 310.16 303.223C337.85 291.353 299.61 224.783 299.61 224.783L252.15 203.023C252.15 203.023 287.75 201.703 309.5 222.143C331.25 242.573 332.57 308.493 332.57 308.493C332.57 308.493 387.28 316.403 400.47 346.073C400.47 346.073 409.04 319.703 392.56 303.883C388.44 299.923 384.11 293.043 379.94 284.953C364.133 253.902 358.42 218.689 363.6 184.233C366.05 167.373 367.56 150.883 364.87 146.993C358.94 138.423 333.89 85.6928 331.91 71.8428C329.94 58.0028 333.89 29.0028 333.89 29.0028C333.89 29.0028 334.55 64.5928 342.46 75.8028C350.37 87.0128 372.78 142.383 372.78 142.383C372.78 142.383 372.78 212.253 391.24 246.533C409.7 280.813 445.29 319.043 443.32 344.093V358.593C443.32 358.593 482.87 321.023 480.23 308.493C477.59 295.973 474.3 266.303 449.25 248.513C424.2 230.713 407.72 202.363 425.52 161.493C435.53 138.503 439.91 126.153 441.83 119.743L431.45 164.133C431.45 164.133 424.86 209.613 443.32 225.433C443.37 225.473 443.41 225.513 443.46 225.553C461.89 241.393 486.16 270.263 486.16 270.263L486.09 268.993L480.89 175.343L482.03 177.843L490.25 195.863L498.03 212.913C498.03 212.913 534.94 165.453 578.45 149.633C621.95 133.813 648.98 78.4428 648.98 78.4428L685.9 49.4328L655.57 85.6928C655.57 85.6928 646.34 128.533 594.27 158.863C542.19 189.183 508.58 234.003 506.6 261.693C504.62 289.383 502.64 313.773 502.64 313.773C502.64 313.773 600.2 310.473 621.95 267.623C643.71 224.783 661.51 222.803 661.51 222.803L648.98 259.713L635.14 291.353C635.14 291.353 691.83 292.673 721.49 326.293C751.16 359.913 824.98 369.803 824.98 369.803L783.46 381.003C783.46 381.003 743.9 367.823 706.33 343.433C668.76 319.043 672.71 297.293 625.91 321.683Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_4"
            opacity="0.1"
            d="M646.93 231.743C642.76 250.203 637.85 268.033 630.95 281.623C609.2 324.473 511.64 327.773 511.64 327.773C511.64 327.773 512.1 322.113 512.8 313.183C537.57 311.143 605.28 302.433 622.95 267.623C624.57 264.443 626.07 261.023 627.49 257.423L646.93 231.743Z"
            fill="black"
          />
          <path
            id="Vector_5"
            opacity="0.1"
            d="M495.16 284.263C495.16 284.263 470.77 255.253 452.32 239.433C448.27 235.973 445.43 231.073 443.46 225.553C443.3 225.113 443.15 224.663 443 224.213C443.43 224.633 443.86 225.043 444.32 225.433C460.47 239.283 481.18 263.243 486.09 268.993C486.78 269.813 487.16 270.263 487.16 270.263L482.03 177.843L490.25 195.863L495.16 284.263Z"
            fill="black"
          />
          <path
            id="Vector_6"
            opacity="0.1"
            d="M509.279 201.03C509.135 217.26 507.028 226.913 507.028 226.913C507.028 226.913 543.927 179.472 587.422 163.641C589.992 162.015 592.6 160.414 595.269 158.86C647.345 128.537 656.573 85.6899 656.573 85.6899L686.896 49.4348L649.982 78.4389C649.982 78.4389 622.955 133.81 579.449 149.631C549.793 160.415 523.205 185.896 509.279 201.03Z"
            fill="black"
          />
          <path
            id="Vector_7"
            opacity="0.1"
            d="M452.316 358.091V372.593C452.316 372.593 491.867 335.019 489.23 322.495C487.214 312.916 484.799 293.318 472.577 276.665C478.086 289.25 479.763 301.526 481.23 308.495C483.121 317.476 463.319 339.337 451.963 350.988C452.361 353.333 452.48 355.717 452.316 358.091V358.091Z"
            fill="black"
          />
          <path
            id="Vector_8"
            opacity="0.1"
            d="M399.262 258.57C399.575 259.238 399.898 259.895 400.24 260.531C410.349 279.304 425.588 299.259 436.99 317.589C427.775 299.437 411.738 278.679 399.262 258.57Z"
            fill="black"
          />
          <path
            id="Vector_9"
            opacity="0.1"
            d="M619.659 390.893C597.975 377.367 579.44 370.068 564.299 366.37C548.417 372.348 535.345 376.805 528.768 378.993C540.564 375.94 574.74 371.884 627.659 404.893C669.18 430.792 712.492 429.771 739.215 425.334C746.605 419.758 752.799 412.753 757.429 404.736C757.429 404.736 686.237 432.421 619.659 390.893Z"
            fill="black"
          />
          <path
            id="Vector_10"
            opacity="0.1"
            d="M431.398 230.506C426.083 217.482 425.207 201.983 431.314 183.823C431.237 177.241 431.617 170.662 432.45 164.133L442.83 119.732C440.916 126.135 436.538 138.488 426.518 161.496C413.833 190.625 418.567 213.386 431.398 230.506Z"
            fill="black"
          />
          <path
            id="Vector_11"
            opacity="0.1"
            d="M722.492 326.293C701.92 302.978 668.356 295.2 649.71 292.621L644.139 305.356C644.139 305.356 700.829 306.674 730.492 340.293C746.942 358.936 776.969 370.278 800.46 376.686L825.984 369.799C825.984 369.799 752.155 359.911 722.492 326.293Z"
            fill="black"
          />
          <path
            id="Vector_12"
            opacity="0.1"
            d="M319.16 317.221C346.846 305.356 308.613 238.778 308.613 238.778L307.567 238.299C317.099 258.409 330.923 294.751 311.16 303.221C292.668 311.146 275.354 291.429 265.893 277.459C266.237 278.447 266.426 278.988 266.426 278.988C266.426 278.988 291.474 329.086 319.16 317.221Z"
            fill="black"
          />
          <path
            id="Vector_13"
            opacity="0.1"
            d="M409.469 360.068C409.469 360.068 417.811 334.353 402.139 318.477C405.982 332.154 401.469 346.068 401.469 346.068C391.27 323.121 356.226 313.194 340.877 309.874C341.472 317.514 341.573 322.495 341.573 322.495C341.573 322.495 396.285 330.405 409.469 360.068Z"
            fill="black"
          />
          <path
            id="Vector_14"
            opacity="0.1"
            d="M442.83 119.732C444.315 114.761 444.316 113.376 444.316 113.376L442.83 119.732Z"
            fill="black"
          />
          <path
            id="Vector_15"
            opacity="0.1"
            d="M113.754 383.925C113.887 383.882 114.022 383.843 114.154 383.799C141.839 374.57 165.57 339.633 189.96 327.768C214.35 315.903 228.852 300.082 261.811 317.221C261.811 317.221 256.045 293.619 244.871 278.112C248.572 286.207 251.563 294.609 253.811 303.221C220.852 286.082 206.35 301.903 181.96 313.768C157.57 325.634 133.839 360.57 106.154 369.799C78.4679 379.028 32.9841 360.57 32.9841 360.57C32.9841 360.57 63.3066 379.687 102.199 382.983C106.648 383.36 110.444 383.692 113.754 383.925Z"
            fill="black"
          />
          <path
            id="Vector_16"
            opacity="0.1"
            d="M234.13 251.963C234.13 251.963 233.05 251.983 231.09 252.013L225.14 237.983C225.79 237.973 226.13 237.963 226.13 237.963C226.13 237.963 221.55 177.263 212.73 148.973C212.84 149.023 212.93 149.083 213.03 149.133C226.87 155.723 234.13 251.963 234.13 251.963Z"
            fill="black"
          />
          <path
            id="Vector_17"
            opacity="0.1"
            d="M388.576 704.006C400.654 666.98 429.701 564.595 406.832 496.52C396.956 467.121 387.802 448.374 380.063 436.414C385.85 447.736 392.178 462.711 398.832 482.52C427.177 566.895 375.76 704.006 375.76 704.006H388.576Z"
            fill="black"
          />
          <path
            id="Vector_18"
            opacity="0.1"
            d="M376.51 389.733C368.556 386.235 360.044 384.18 351.37 383.663C347.2 374.953 346.54 370.473 351.94 370.693C353.44 370.963 354.95 371.283 356.45 371.653C367.05 380.453 376.51 389.733 376.51 389.733Z"
            fill="black"
          />
          <path
            id="Vector_19"
            opacity="0.1"
            d="M198.055 128.73C198.807 129.996 199.718 131.16 200.766 132.195C199.996 130.941 199.087 129.779 198.055 128.73V128.73Z"
            fill="black"
          />
          <path
            id="Vector_20"
            opacity="0.1"
            d="M318.501 236.141C319.52 237.105 320.475 238.134 321.359 239.222C318.471 232.281 314.905 226.279 310.501 222.141C288.748 201.707 253.152 203.025 253.152 203.025L297.793 223.485C305.442 226.339 312.473 230.636 318.501 236.141Z"
            fill="black"
          />
          <path
            id="Vector_21"
            opacity="0.1"
            d="M365.873 146.994C368.563 150.88 367.051 167.37 364.596 184.235C359.418 218.69 365.132 253.901 380.941 284.949C383.041 289.104 385.387 293.13 387.965 297.007C372.9 266.417 367.537 231.956 372.595 198.235C375.051 181.37 376.563 164.88 373.873 160.994C367.94 152.425 342.891 99.6899 340.913 85.847C340.32 80.4766 340.182 75.0658 340.5 69.6721C335.38 55.1436 334.891 29 334.891 29C334.891 29 330.936 58.0042 332.913 71.847C334.891 85.6898 359.94 138.425 365.873 146.994Z"
            fill="black"
          />
          <path
            id="Vector_22"
            opacity="0.1"
            d="M194.887 122.253C200.697 122.964 207.38 124.746 212.477 128.88C212.144 127.756 211.854 126.748 211.623 125.9C205.691 104.147 174.05 108.102 174.05 108.102C188.349 109.935 192.042 116.051 194.887 122.253Z"
            fill="black"
          />
        </g>
        <path
          id="Surface"
          d="M887.316 703.006H81.3159V705.006H887.316V703.006Z"
          fill="#3F3D56"
        />
        <g id="Leaves">
          <path
            id="Vector_24"
            v-bind:class="[attempts <= 2 ? 'fade' : 'display']"
            d="M322.886 201.047C321.765 219.01 308.151 232.779 308.151 232.779C308.151 232.779 296.354 217.424 297.476 199.461C298.597 181.497 312.211 167.728 312.211 167.728C312.211 167.728 324.007 183.083 322.886 201.047Z"
            fill="#00BFA6"
          />
          <path
            id="Vector_25"
            v-bind:class="[attempts <= 4 ? 'fade' : 'display']"
            d="M180.97 87.4851C196.195 97.0839 201.748 115.634 201.748 115.634C201.748 115.634 182.617 118.621 167.392 109.022C152.167 99.4233 146.613 80.8734 146.613 80.8734C146.613 80.8734 165.745 77.8862 180.97 87.4851Z"
            fill="#00BFA6"
          />
          <path
            id="Vector_26"
            v-bind:class="[attempts <= 5 ? 'fade' : 'display']"
            d="M146.97 306.485C162.195 316.084 167.748 334.634 167.748 334.634C167.748 334.634 148.617 337.621 133.392 328.022C118.167 318.423 112.613 299.873 112.613 299.873C112.613 299.873 131.745 296.886 146.97 306.485Z"
            fill="#00BFA6"
          />
          <path
            id="Vector_27"
            v-bind:class="[attempts <= 0 ? 'fade' : 'display']"
            d="M456.49 119.501C451.898 136.904 435.867 147.764 435.867 147.764C435.867 147.764 427.281 130.409 431.872 113.006C436.463 95.6033 452.494 84.7429 452.494 84.7429C452.494 84.7429 461.081 102.098 456.49 119.501Z"
            fill="#00BFA6"
          />
          <path
            id="Vector_28"
            v-bind:class="[attempts <= 1 ? 'fade' : 'display']"
            d="M601.325 133.071C595.929 150.241 579.409 160.343 579.409 160.343C579.409 160.343 571.64 142.607 577.036 125.437C582.433 108.266 598.952 98.1641 598.952 98.1641C598.952 98.1641 606.722 115.9 601.325 133.071Z"
            fill="#00BFA6"
          />
          <path
            id="Vector_29"
            v-bind:class="[attempts <= 4 ? 'fade' : 'display']"
            d="M757.87 324.168C748.094 339.28 729.481 344.617 729.481 344.617C729.481 344.617 726.717 325.452 736.492 310.339C746.268 295.227 764.881 289.89 764.881 289.89C764.881 289.89 767.645 309.055 757.87 324.168Z"
            fill="#00BFA6"
          />
          <g id="Frame" clip-path="url(#clip0)">
            <path
              id="Vector_30"
              v-bind:class="[attempts <= 6 ? 'fade' : 'display']"
              d="M42.072 339.902C53.6145 353.711 53.204 373.071 53.204 373.071C53.204 373.071 34.0794 370.039 22.5369 356.229C10.9945 342.42 11.4051 323.061 11.4051 323.061C11.4051 323.061 30.5296 326.092 42.072 339.902Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_2" clip-path="url(#clip1)">
            <path
              id="Vector_31"
              v-bind:class="[attempts <= 3 ? 'fade' : 'display']"
              d="M264.873 179.014C274.888 193.969 272.429 213.176 272.429 213.176C272.429 213.176 253.733 208.136 243.718 193.18C233.704 178.226 236.163 159.019 236.163 159.019C236.163 159.019 254.859 164.059 264.873 179.014Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_3" clip-path="url(#clip2)">
            <path
              id="Vector_32"
              v-bind:class="[attempts <= 3 ? 'fade' : 'display']"
              d="M687.542 224.146C672.196 233.55 653.104 230.32 653.104 230.32C653.104 230.32 658.893 211.842 674.239 202.438C689.585 193.033 708.677 196.264 708.677 196.264C708.677 196.264 702.888 214.742 687.542 224.146Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_4" clip-path="url(#clip3)">
            <path
              id="Vector_33"
              v-bind:class="[attempts <= 5 ? 'fade' : 'display']"
              d="M816.781 353.826C832.293 344.698 851.324 348.27 851.324 348.27C851.324 348.27 845.205 366.641 829.692 375.769C814.18 384.896 795.149 381.324 795.149 381.324C795.149 381.324 801.268 362.953 816.781 353.826Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_5" clip-path="url(#clip4)">
            <path
              id="Vector_34"
              v-bind:class="[attempts <= 6 ? 'fade' : 'display']"
              d="M765.036 405.438C782.608 409.333 794.098 424.919 794.098 424.919C794.098 424.919 777.098 434.19 759.526 430.294C741.954 426.399 730.465 410.813 730.465 410.813C730.465 410.813 747.464 401.542 765.036 405.438Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_6" clip-path="url(#clip5)">
            <path
              id="Vector_35"
              v-bind:class="[attempts <= 0 ? 'fade' : 'display']"
              d="M504.045 163.685C497.841 180.58 480.861 189.888 480.861 189.888C480.861 189.888 473.941 171.804 480.145 154.908C486.35 138.013 503.329 128.705 503.329 128.705C503.329 128.705 510.249 146.79 504.045 163.685Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_7" clip-path="url(#clip6)">
            <path
              id="Vector_36"
              v-bind:class="[attempts <= 1 ? 'fade' : 'display']"
              d="M329.661 27.6937C340.116 42.3439 338.229 61.6153 338.229 61.6153C338.229 61.6153 319.392 57.1337 308.937 42.4834C298.481 27.8332 300.368 8.56197 300.368 8.56197C300.368 8.56197 319.205 13.0434 329.661 27.6937Z"
              fill="#00BFA6"
            />
          </g>
          <g id="Frame_8" clip-path="url(#clip7)">
            <path
              id="Vector_37"
              v-bind:class="[attempts <= 2 ? 'fade' : 'display']"
              d="M700.705 51.5349C689.078 65.2737 669.935 68.1874 669.935 68.1874C669.935 68.1874 669.643 48.8263 681.27 35.0875C692.897 21.3489 712.04 18.4351 712.04 18.4351C712.04 18.4351 712.332 37.7962 700.705 51.5349Z"
              fill="#00BFA6"
            />
          </g>
        </g>
        <g
          id="noose"
          v-bind:style="attempts < 7 ? 'opacity: 1;' : 'opacity: 0;'"
        >
          <path
            id="Vector_38"
            d="M289 287H190V440H289V287Z"
            fill="url(#pattern0)"
          />
        </g>
        <g id="man">
          <g
            id="body"
            v-bind:style="attempts <= 5 ? 'opacity: 1;' : 'opacity: 0;'"
          >
            <g id="Component">
              <g id="body-parts">
                <path
                  id="left-arm"
                  v-bind:style="attempts <= 3 ? 'opacity: 1;' : 'opacity: 0;'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M217 425.501C202.702 425.639 191.306 437.124 191.306 452.032V528.162C191.307 534.216 196.213 539.121 202.266 539.121C208.315 539.121 213.22 534.22 213.223 528.172C213.227 528.17 213.237 461.262 213.237 461.262C213.237 460.633 213.746 460.122 214.378 460.122H216.698C216.802 460.122 216.904 460.136 217 460.162V425.501ZM230.092 663C230.705 663.081 231.332 663.123 231.968 663.123C232.604 663.123 233.23 663.081 233.843 663H230.092ZM262.964 663C263.577 663.081 264.204 663.123 264.84 663.123C265.476 663.123 266.102 663.081 266.716 663H262.964Z"
                  fill="black"
                />
                <path
                  id="right-arm"
                  v-bind:style="attempts <= 2 ? 'opacity: 1;' : 'opacity: 0;'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M276 460.127C276.036 460.124 276.072 460.122 276.109 460.122H278.429C279.059 460.122 279.57 460.631 279.57 461.262C279.57 461.262 279.58 528.17 279.585 528.172C279.59 534.22 284.493 539.121 290.541 539.121C296.592 539.121 301.5 534.216 301.5 528.162V452.032C301.5 437.195 290.205 425.743 276 425.504V460.127Z"
                  fill="black"
                />
                <path
                  id="torso"
                  v-bind:style="attempts <= 4 ? 'opacity: 1;' : 'opacity: 0;'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M216 529H276.969V461.262C276.969 461.171 276.98 461.082 277 460.997V425.5H248.709H244.096H216V529Z"
                  fill="black"
                />
                <path
                  id="right-leg"
                  v-bind:style="attempts <= 0 ? 'opacity: 1;' : 'opacity: 0;'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M248.71 638.494V529H276.969V638.494C276.969 646.297 270.643 652.623 262.84 652.623C255.037 652.623 248.71 646.298 248.71 638.494Z"
                  fill="black"
                />
                <path
                  id="left-leg"
                  v-bind:style="attempts <= 1 ? 'opacity: 1;' : 'opacity: 0;'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M215.838 638.494V529H244.097V638.494C244.097 646.297 237.771 652.623 229.967 652.623C222.164 652.623 215.838 646.298 215.838 638.494Z"
                  fill="black"
                />
              </g>
            </g>
            <path
              id="head"
              v-bind:style="attempts <= 6 ? 'opacity: 1;' : 'opacity: 0;'"
              d="M246.238 423.05C258.955 423.05 269.263 412.741 269.263 400.025C269.263 387.309 258.955 377 246.238 377C233.522 377 223.213 387.309 223.213 400.025C223.213 412.741 233.522 423.05 246.238 423.05Z"
              fill="black"
            />
          </g>
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image0" transform="scale(0.005)" />
        </pattern>
        <clipPath id="clip0">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(0.157959 332.377) rotate(-42.3638)"
          />
        </clipPath>
        <clipPath id="clip1">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(223.992 167.091) rotate(-36.2822)"
          />
        </clipPath>
        <clipPath id="clip2">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(701.102 183.778) rotate(56.0253)"
          />
        </clipPath>
        <clipPath id="clip3">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(791.296 380.902) rotate(-95.1363)"
          />
        </clipPath>
        <clipPath id="clip4">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(727.241 425.057) rotate(-79.9757)"
          />
        </clipPath>
        <clipPath id="clip5">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(489.642 123.61) rotate(17.69)"
          />
        </clipPath>
        <clipPath id="clip6">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(288.443 16.993) rotate(-37.9882)"
          />
        </clipPath>
        <clipPath id="clip7">
          <rect
            width="26"
            height="66"
            fill="white"
            transform="translate(700.934 8.95131) rotate(37.7667)"
          />
        </clipPath>
        <image
          id="image0"
          data-name="image0.png"
          width="200"
          height="200"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAC09JREFUeJzt3X/MVmUdx/H3w++fCYpAoEKYkppQKOAPsshkOYflH9XaWltZa+WcG6VrzUbKH9VcW6X9sIlmNXE0XCI0xMCtggmmojLkAV38UFIQTAQBH57n7o/vc8ctPPd1nfu+z7muc879eW3X+OM83Pf3PM/1PT+uc53vBSIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiudMROwAB4APAd4HPABXgb8DPgHdiBiWSB2OArVhi1LaXgDMixiWSC/dxanJU270R4xLJhf3UT5A3I8Yl6B4kDyqe7fobRdQvdgAieaYEEXFQgog4KEFEHJQgIg5KEBEHJYiIgxJExEEJIuKgBBFxUIKIOChBRByUICIOShARByWIiIMSRMRBCSLioAQRcVCCiDgoQUQclCAiDkoQEQcliIiDEkTEQQki4qAEEXFQgog4KEEaNxhYBOzG6up2YQWoXwSWAd8HZqGautKGOoAV1K/GXtt2AXcC4z2f6fsckcK4nmTJUduOAHdhq0j1RQkipfELGk+QansVmNfHZypBckz3II1ppcNOBFYBP0L3J1JS82n+DFLbHgT6936mziBSKstJJ0mWYGdwJYiUyiBgIbAT6KG1JPllgp+RiHQt3JoO4DRgAjAbuA67DBuU8neIlMY44DfAcdK5FBMppSuxyzAliEgd44FNKEFE6jod2IISRKSuSdiERiWISB3XoQQRcbofJYhIXWOAt1CCiNT1PZQgInUNBV5HCVIImu4e3hFsDpaI1DEGOIrOICJ1PYQSRKSua1GC5J6mUsczEHgDGO35uauBs/poI4CNWOWUbdmFKRLWMOBC7Ml6qxMZK8DbwEVB96CN6AySrXHA14BpwId627gMvmcVdskmUhizafypebPtKBqylwLpD7xCmOSotiFB9kwkBZcSNjleCLNb7Uen5WwMDvhd3cBtAb9PpGWjsarvWZ41uoD12DCwZESjWNm5B7gphc9ZA+zobTtr/n0NO3uIFNIg4AH6PvofBJ4FltbZXtskIp1Bsnc+NuRbAf4NbAf21mz3JYH+RtLWmjmDDKD+eiOSogGxAxCv2zh1HtY4bASyE7gVeCxadCWn03dYo7ESQLVtQYuf2YPN61rV4ueIBHcesBhb4PMg2Q35Ph1qh0TSMoNsk6K2HUeXy1Iw6wg31aSbdJdcEMnUEFpfXKeRtibMbomkYyB2VA+RHAeAj4bZLZH0PEV2SbEfexJ/D3BOqB1qRxrmzc5c4AlOrGbbrJ9ic69q26EWP1MkFz4LvMz7j/57sRv4B4Hbgd24zxYipdYBnIvdJ/Q1PcRXuEEi0th59irY67dp6ADOxKabjMQeQB5I6bNFcsl3BlmKXZLtAI6dtO0Ytma7ZEQ36WH0AyZic68m1/w7GVsNd2iLn/8dbOlpkUKZjo1knXzkT7ttD7VDImn5COHmYlUIWyhCpGVLCJccR2n9eYv0QWV/snNpwO9ahgo4SMFsJMzZ43ls6FcyoOcg2VkFzEz5M48Auzgx5WQ9dil3LOXvEcncSGALrZ8hFgCzgLFhwxfJ3mjg19j8qx5skmEzSbIfWI4VopsYdA9EApgDPIK9GtvqGaUbWA3cgAZZpOBmAmvJ7ga9E/gymhEhBXMGVnY01Gu3G4BLguyZSIs+hy3OGSIxattx4MfY674iuTMIewU2dGKc3DZiayGK5MY4wpb58bU3sVd+pUW6uWvdVOyh4OQm/m838Fxv28uJqu9je9sM4OM0N1rVBXwd+FMT/1ckFTOAfTR2dO/Gik1/HjgtwXeMwoZ0V9J4KaEe7F0RkeBm0Ngyz13A3TR3pqmagj14bPR5ShorXYkkdgF2nZ+0gz4BXJTi919MY89XeoCvpvj9InVNxF+qp9qOku0lzs0kf1vxPeCaDGMRYRhW0TBJh9yGvXKbtUuwqilJYnobG1QQycTDJOuIG7Cn6aGMBZ5JGNtWtHybZOAWknXA1cCICPGNJPl9ydII8UmJTSPZtf6TxC2eMBT4Rx9x9dW+FSlGKZmB2Gutvg73HPm4dBkFvIA/3sPofkRScDv+zrYLm26SFxOAPfjjXofeKZEWnIu9B+4bPr0sVoAOc7CHk74kuTlWgFJ8j1LsDrYAf/z/JV9nPymIufg714po0SX3OP79eCBadFJYG/AfeYtQQOEc/CVQu7GROpFE5uM/6t4YLbrGfRv//vw1WnRSOL6qiE/FC60pHSSbIjM7VoBSHEnuPa6IFl3zkuzXY9Gik8JYjrsT/TleaC3z7VsPcGG06CT3JuF+a6/oHehj+M8i90aLTnJvEe7O82i80FKzCvc+HsKmq4i8TwdWMd3VefL4xLxRn8J/FtErunKKq3B3mg3xQkudb/LlM/FCyxdNVDvhC57ti4NEEYZvX2ZgayyK/J/rPfPD5GMqe1pOx96Xd51FFkaLTnJnGu7OsiReaJlZhnufN8ULLT90iWXmebaXYfTqZMs926dj87hEWEH9I+l7JKuAWDRj8Beg+0a06CRXDlC/k6yJGFfWfAW3H44XWj7oEsveGhzt2P7PUIFE4Nu3TwSJIseUIDb9wmV9kCji8O3bBFqrJVx4ShD33KqyPSA8WZLkb+ul3ZQgcL5j2x7szcGy2ocV4XbxnWFLTQliM3jreSVYFPG87Nle5NnLLVOCwAcd23ydpwx8+9jWxeWUIO4i0/8JFkU8vn10nWFLTwliRZ/rORQsinh8+ziCcj4oTaTdE6QDGODY3g4J8k6CnxmbeRQ51e4JUn2Ntp7joQKJqCvBz7gOIqXW7gkC7rNEjHU+Qksyjf9g5lHklBLEfYnRDgniugerSnIZVkpKEPfRcXywKOLxFa6uFnJoS0oQ2OHY5nrKXha+5xy7cN+nlZoSBDod29rhIZlvH12/n9JTgrg7wASKUcG9WVPwr8arBGlzL3q2fzpIFHEk2bfNmUchuTYIq1pS762630eLLHsP4S8i1w73YeKxmvod5C3iLu2clWHY8K0rOXZHiy4ndIllXO+dj8IW1CmbG/A/51kbIhDJvw/jPpI+Hi+0zDyJ//Lq+mjRSe6sx91ZyvTq6RX4k2MfMDBWgJI/vnX8HokXWupW4k+Qu6NFJ7k0Cv9qsJ+MFl165uFPjh7g4lgBSn79BHfH2UyxLzsGA9vwJ0gZS61KCsYC7+LuPHdGi651vgNAtc2KFaDk3124O083cHW06Jp3LXbp5EuOlbEClGIYCbyGuxO9TrGKGUzBRqV8yXEUG/IWcfoS/s60FauQnndjsdI+SS6t7ogUoxRQkqHQp7HVmvJqDPAsyZLjJWBInDCliM7Ef6lVAbYAZ0eK0WUSNlU9SXK8i4Z1pQlX4V9kpoJN6rs8Uox9mYPVFU6SHBXgm3HClDK4hWSdrAu4Fau1FUs/4AckS+pq+12USKVUkj4/qGBzumJURL8E2NhAnBXgL0D/CLFKCS0mecc7DvyWMEPBU4D7sOczjSTH39FNuaSoH/ArGuuEXdgbiZdlEM/lwB9o7HKq2lYBwzOISYQf0niHrGAjSguBK2luPtdAbM3AO4DtTcZQAf7Y5Pe3pZg3lEX2FewSqtmj8GHgX9jDxk7gVez112oFw5G97WysLM9UYCb2mmyzerDkWoQlikimLsBm9zZ7JA/Z9gBzs/k1iNQ3DPg5zd0HhGpLaePlCyQfpgPriJ8Mta0TuCbLnRZpRAfwRWATcRNjJ3AT5SxVJCUxH3vOEDIxNgM3ohEqKZAp2NBu0unmjbY3sHugGaF2qN1omDec87BauHOxsjtn0fjvfy82xX5tb3seSxTJiBIknuFY3dup2CI21Wcfw4EjnHgush8rtNCJlUEVEREREREREREREREREREREREREREREZH29j861LzdYTWtJQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
    <button class="btn badge count" :data-badge="`${attempts}`">Lives</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Hangman",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.isActive = true;
  },
  methods: {
    bringTreeIntoView() {
      this.ButtonSelected();
    },
  },
  computed: {
    ...mapGetters({
      scrollTreeIntoView: "getButtonSelected",
      attempts: "getAttempts",
    }),
  },
};
</script>

<style scoped lang="scss">
/* .hangman {
  width: 60vw;
  margin: auto;
} */
.btn.badge.count {
  height: auto;
  padding: 0.1rem;
  font-weight: bold;
  color: #2c3e50;
  border-color: #2c3e50;
}

.badge:not([data-badge])::after,
.badge[data-badge]::after {
  background: #2c3e50;
}
.hangman {
  position: relative;
  height: 0;
  width: 60%;
  padding: 0;
  padding-bottom: 50%;
  margin: auto;
}

.hangman-svg {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.hangman-svg:hover {
  stroke-dasharray: 6000;
  // stroke-dasharray: 5500;
  stroke-dashoffset: 5500;
  animation: animate-tree 2s linear forwards;
}

.loading {
  stroke-dasharray: 5500;
  stroke-dashoffset: 5500;
  animation: animate-tree 2s linear forwards;
}

#HangmanTree #Tree path {
  stroke-width: 4;
  stroke: #2c3e50;
}

.animate-tree {
  stroke-dasharray: 5500;
  stroke-dashoffset: 5500;
  animation: animate-tree 2s linear forwards;
}
@keyframes animate-tree {
  0% {
    stroke-dashoffset: 0;
    fill-opacity: 0%;
  }
  40% {
    stroke-dashoffset: 5500;
    fill-opacity: 0%;
  }
  80% {
    stroke-dashoffset: 8250;
    fill-opacity: 10%;
  }
  100% {
    stroke-dashoffset: 11000;
    fill-opacity: 100%;
  }
}

/* Animate noose */
#noose {
  animation: noose-sway 1.8s infinite alternate ease-in-out;
  transform-origin: top;
  transform-box: fill-box;
}
/* Animate head */
#head {
  animation: head-swing 1.8s infinite alternate ease-in-out;
  transform-origin: bottom;
  transform-box: fill-box;
}
/* Animate body */
#body-parts {
  animation: body-sway 1.8s infinite alternate ease-in-out;
  transform-origin: top;
  transform-box: fill-box;
}
/* Animate arms */
#left-arm,
#right-arm {
  animation: arms-sway 1.8s infinite alternate ease-in-out;
  transform-origin: top;
  transform-box: fill-box;
}
/* Animate legs */
#left-leg,
#right-leg {
  animation: legs-sway 1.8s infinite alternate ease-in-out;
  transform-origin: top;
  transform-box: fill-box;
}
/* Animate the leaves */
#Leaves :where(#Vector_24, #Vector_27, #Vector_28, #Vector_29) {
  animation: leaves-breeze 1.1s infinite alternate ease-in-out;
  transform-origin: bottom;
  transform-box: fill-box;
}

#Leaves :where(#Vector_25, #Vector_26) {
  animation: leaves-breeze 1.1s infinite alternate ease-in-out;
  transform-origin: right;
  transform-box: fill-box;
}

#Leaves :where(#Frame, #Frame_2, #Frame_6, #Frame_7, #Frame_8) {
  animation: leaves-breeze 1.1s infinite alternate ease-in-out;
  transform-origin: bottom;
  transform-box: fill-box;
}

#Leaves :where(#Frame_3, #Frame_4, #Frame_5) {
  animation: leaves-breeze 1.1s infinite alternate ease-in-out;
  transform-origin: left;
  transform-box: fill-box;
}

.display {
  opacity: 1;
}

.fade {
  animation: fall 1.8s forwards ease-in-out !important; // This needs to overide the default animation.
}

@keyframes fall {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  25% {
    transform: translate(0, 0);
    opacity: 0.8;
  }
  50% {
    transform: translate(-10, 50px);
  }
  75% {
    transform: translate(-20, 150px);
    opacity: 0.4;
  }
  100% {
    transform: translate(-30, 200px);
    opacity: 0;
  }
}

@keyframes leaves-breeze {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(10deg);
  }
}

@keyframes noose-sway {
  from {
    transform: rotateZ(6deg);
  }
  to {
    transform: rotateZ(-6deg);
  }
}

@keyframes head-swing {
  from {
    transform: rotateZ(-24deg);
    transform: translateX(-12px);
  }
  to {
    transform: rotateZ(24deg);
    transform: translateX(10px);
  }
}

@keyframes body-sway {
  from {
    transform: rotateZ(-8deg);
    transform: translateX(-10px);
  }
  to {
    transform: rotateZ(8deg);
    transform: translateX(10px);
  }
}

@keyframes arms-sway {
  from {
    transform: skew(1deg);
  }
  to {
    transform: skew(-1deg);
  }
}

@keyframes legs-sway {
  from {
    transform: skew(2deg) translateY(-2px);
  }
  to {
    transform: skew(-2deg) translateY(-2px);
  }
}
</style>
