import { Logo, Twitter } from "@/constants/Icons/svg";
import React from "react";

function Footer() {
  return (
    <footer className="bg-void py-[141px] px-[120px]">
      <div className="flex justify-between px-[60px] py-[60px]">
        {/* left */}
        <div className="w-[276px] flex-1">
          <Logo />
        </div>
        {/* right */}

        <div className=" bg-void font-grotesk  text-[#FCFCFC99]/80 box-border flex flex-col xl:flex-row gap-8 items-start justify-start w-full xl:basis-0 xl:grow xl:min-h-px xl:min-w-px p-0 relative shrink-0">
          <div className="w-full xl:basis-0 xl:grow xl:shrink-0 xl:min-h-px xl:min-w-px box-border flex flex-col gap-4 items-start justify-start p-0 relative pl-2 md:pl-0">
            <div className="text-base md:text-lg relative shrink-0 text-left w-full">
              <p className="block leading-[1.4] text-white">Links</p>
            </div>
            <div className="box-border flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
              <a
                href="https://docs.zkverify.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base relative shrink-0 text-shell/60 text-left text-nowrap hover:text-pulse/80 transition-colors"
              >
                <p className="block leading-[1.4] whitespace-pre text-lg">
                  Documentation
                </p>
              </a>
            </div>
            <div className="box-border flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
              <a
                href="https://zkverify-testnet.subscan.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base relative shrink-0 text-shell/60 text-left text-nowrap hover:text-pulse/80 transition-colors"
              >
                <p className="block leading-[1.4] whitespace-pre text-lg  ">
                  Explorer
                </p>
              </a>
            </div>
            <div className="box-border flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
              <a
                href="https://www.faucy.com/zkverify-volta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base relative shrink-0 text-shell/60 text-left text-nowrap hover:text-pulse/80 transition-colors"
              >
                <p className="block leading-[1.4] whitespace-pre text-lg  ">
                  Faucet
                </p>
              </a>
            </div>
            <div className="box-border flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
              <a
                href="https://downloads.horizenlabs.io/file/labs-web-assets/zkverify-protocol-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base relative shrink-0 text-shell/60 text-left text-nowrap hover:text-pulse/80 transition-colors"
              >
                <p className="block leading-[1.4] whitespace-pretext-lg ">
                  Whitepaper
                </p>
              </a>
            </div>
            <div className="box-border flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
              <a
                href="https://downloads.horizenlabs.io/file/labs-web-assets/zkVerify_MediaKit_Folder_2025.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base relative shrink-0 text-shell/60 text-left text-nowrap hover:text-pulse/80 transition-colors"
              >
                <p className="block leading-[1.4] whitespace-pre text-lg ">
                  Media Kit
                </p>
              </a>
            </div>
          </div>
          <div className="w-full xl:basis-0 xl:grow xl:shrink-0 xl:min-h-px xl:min-w-px box-border flex flex-col gap-4 items-start justify-start p-0 relative pl-2 md:pl-0">
            <div className="text-base md:text-lg leading-[0] min-w-full relative shrink-0 text-left">
              <p className="block leading-[1.4] text-white">Social</p>
            </div>
            <div className="box-border flex flex-row gap-[23px] items-center justify-start p-0 relative shrink-0">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M18.901 2.09375H22.581L14.541 11.2838L24 23.7868H16.594L10.794 16.2028L4.156 23.7868H0.474L9.074 13.9567L0 2.09475H7.594L12.837 9.02675L18.901 2.09375ZM17.61 21.5847H19.649L6.486 4.18075H4.298L17.61 21.5847Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M20.317 5.3104C18.761 4.59617 17.119 4.08685 15.4319 3.7952C15.4166 3.79234 15.4007 3.79439 15.3867 3.80105C15.3726 3.80771 15.3609 3.81865 15.3534 3.8323C15.1424 4.2076 14.9087 4.6971 14.7451 5.0818C12.9004 4.8056 11.0651 4.8056 9.2583 5.0818C9.0947 4.6885 8.8525 4.2076 8.6406 3.8323C8.63276 3.81896 8.62107 3.80829 8.60706 3.80169C8.59306 3.79509 8.57739 3.79286 8.5621 3.7953C6.87488 4.08627 5.2327 4.59554 3.6769 5.3103C3.66359 5.31599 3.65238 5.32567 3.6448 5.338C0.533404 9.9864 -0.318996 14.5205 0.099204 18.9984C0.100386 19.0094 0.103757 19.02 0.109116 19.0296C0.114476 19.0393 0.121714 19.0477 0.130404 19.0545C2.1832 20.5621 4.1717 21.4773 6.1233 22.0839C6.13848 22.0884 6.15468 22.0882 6.16972 22.0833C6.18477 22.0784 6.19795 22.0689 6.2075 22.0563C6.6691 21.4259 7.0806 20.7611 7.4335 20.0621C7.43835 20.0525 7.44112 20.042 7.44163 20.0313C7.44213 20.0206 7.44036 20.0099 7.43643 19.9999C7.4325 19.9899 7.4265 19.9809 7.41883 19.9734C7.41115 19.9659 7.40198 19.9601 7.3919 19.9564C6.7391 19.7088 6.1176 19.4069 5.5197 19.0641C5.5088 19.0577 5.49964 19.0487 5.49304 19.0379C5.48643 19.0271 5.48258 19.0149 5.48183 19.0023C5.48108 18.9897 5.48345 18.977 5.48873 18.9656C5.49401 18.9541 5.50204 18.9441 5.5121 18.9364C5.6379 18.8421 5.7638 18.7441 5.8839 18.645C5.89458 18.6362 5.9075 18.6306 5.92121 18.6287C5.93492 18.6268 5.94887 18.6289 5.9615 18.6345C9.8893 20.4278 14.1415 20.4278 18.0229 18.6345C18.0355 18.6285 18.0496 18.6262 18.0635 18.6279C18.0774 18.6296 18.0906 18.6351 18.1014 18.644C18.2216 18.743 18.3474 18.8421 18.4742 18.9364C18.4843 18.944 18.4924 18.9539 18.4977 18.9654C18.5031 18.9768 18.5055 18.9894 18.5049 19.002C18.5042 19.0146 18.5005 19.0268 18.494 19.0376C18.4875 19.0485 18.4784 19.0575 18.4676 19.064C17.8695 19.4134 17.2429 19.7115 16.5946 19.9554C16.5845 19.9593 16.5754 19.9652 16.5678 19.9728C16.5602 19.9804 16.5542 19.9896 16.5504 19.9997C16.5466 20.0097 16.5449 20.0205 16.5455 20.0313C16.5461 20.042 16.549 20.0525 16.5539 20.0621C16.9143 20.7601 17.3258 21.4249 17.7789 22.0553C17.7882 22.0683 17.8013 22.0781 17.8164 22.0832C17.8315 22.0883 17.8478 22.0886 17.8631 22.0839C19.8241 21.4772 21.8126 20.562 23.8654 19.0545C23.8742 19.0481 23.8816 19.0398 23.887 19.0303C23.8924 19.0208 23.8957 19.0102 23.8967 18.9993C24.3971 13.8223 23.0585 9.3254 20.3482 5.3389C20.3416 5.32595 20.3305 5.31591 20.317 5.3104ZM8.02 16.2718C6.8375 16.2718 5.8631 15.1861 5.8631 13.8528C5.8631 12.5196 6.8186 11.4339 8.0201 11.4339C9.2309 11.4339 10.1958 12.5291 10.1769 13.8529C10.158 15.1861 9.2214 16.2718 8.02 16.2718ZM15.9948 16.2718C14.8123 16.2718 13.8379 15.1861 13.8379 13.8528C13.8379 12.5196 14.7933 11.4339 15.9948 11.4339C17.2056 11.4339 18.1705 12.5291 18.1516 13.8529C18.1516 15.1861 17.2056 16.2718 15.9948 16.2718Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M11.944 0.940462C8.77112 0.955269 5.73324 2.22609 3.4949 4.47492C1.25656 6.72375 -3.4549e-05 9.76754 7.12435e-10 12.9405C7.12441e-10 16.1231 1.26428 19.1753 3.51472 21.4257C5.76515 23.6762 8.8174 24.9405 12 24.9405C15.1826 24.9405 18.2348 23.6762 20.4853 21.4257C22.7357 19.1753 24 16.1231 24 12.9405C24 9.75786 22.7357 6.70562 20.4853 4.45518C18.2348 2.20474 15.1826 0.940462 12 0.940462C11.9813 0.940419 11.9627 0.940419 11.944 0.940462ZM16.906 8.16446C17.006 8.16246 17.227 8.18746 17.371 8.30446C17.4667 8.38756 17.5277 8.50354 17.542 8.62946C17.558 8.72246 17.578 8.93546 17.562 9.10146C17.382 10.9995 16.6 15.6035 16.202 17.7285C16.034 18.6285 15.703 18.9295 15.382 18.9585C14.686 19.0235 14.157 18.4985 13.482 18.0565C12.426 17.3635 11.829 16.9325 10.804 16.2565C9.619 15.4765 10.387 15.0465 11.062 14.3465C11.239 14.1625 14.309 11.3695 14.369 11.1165C14.376 11.0845 14.383 10.9665 14.313 10.9045C14.243 10.8425 14.139 10.8635 14.064 10.8805C13.958 10.9045 12.271 12.0205 9.003 14.2255C8.523 14.5555 8.09 14.7155 7.701 14.7055C7.273 14.6975 6.449 14.4645 5.836 14.2655C5.084 14.0205 4.487 13.8915 4.539 13.4765C4.566 13.2605 4.864 13.0395 5.432 12.8135C8.93 11.2895 11.262 10.2845 12.43 9.79946C15.762 8.41346 16.455 8.17246 16.906 8.16446Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 0.94043C5.374 0.94043 0 6.31343 0 12.9404C0 18.2424 3.438 22.7404 8.207 24.3274C8.806 24.4384 9 24.0664 9 23.7504V21.5164C5.662 22.2424 4.967 20.1004 4.967 20.1004C4.421 18.7134 3.634 18.3444 3.634 18.3444C2.545 17.5994 3.717 17.6154 3.717 17.6154C4.922 17.6994 5.556 18.8524 5.556 18.8524C6.626 20.6864 8.363 20.1564 9.048 19.8494C9.155 19.0744 9.466 18.5444 9.81 18.2454C7.145 17.9404 4.343 16.9114 4.343 12.3144C4.343 11.0034 4.812 9.93343 5.579 9.09343C5.455 8.79043 5.044 7.56943 5.696 5.91743C5.696 5.91743 6.704 5.59543 8.997 7.14743C9.954 6.88143 10.98 6.74843 12 6.74343C13.02 6.74843 14.047 6.88143 15.006 7.14743C17.297 5.59543 18.303 5.91743 18.303 5.91743C18.956 7.57043 18.545 8.79143 18.421 9.09343C19.191 9.93343 19.656 11.0044 19.656 12.3144C19.656 16.9234 16.849 17.9384 14.177 18.2354C14.607 18.6074 15 19.3374 15 20.4574V23.7504C15 24.0694 15.192 24.4444 15.801 24.3264C20.566 22.7374 24 18.2404 24 12.9404C24 6.31343 18.627 0.94043 12 0.94043Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="backdrop-blur-[18px] backdrop-filter bg-void box-border flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-14 xl:gap-0 px-[22px] xl:px-[60px] py-8 relative shrink-0 w-full">
        <div class="flex flex-col md:flex-row md:items-center md:gap-[18px] items-center justify-start gap-[18px] relative shrink-0">
          <div class="text-xs text-white leading-[0] relative shrink-0 text-center text-nowrap">
            <p class="block leading-[1.4] whitespace-pre">
              © 2025 Goody. All rights reserved.{" "}
            </p>
          </div>
          <div class="hidden md:block text-xs leading-[0] relative shrink-0 text-left text-nowrap">
            <p class="block leading-[1.4] whitespace-pre">|</p>
          </div>
          <div class="flex text-white text-xs gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-nowrap">
            <a
              href="/terms-of-use"
              class="relative shrink-0 hover:text-pulse/80 transition-colors"
            >
              <p class="block leading-[1.4] text-nowrap whitespace-pre">
                Terms of Use
              </p>
            </a>
            <div class="text-xs leading-[0] relative shrink-0 text-left text-nowrap"></div>
            <a
              href="/privacy-policy"
              class="relative shrink-0 hover:text-pulse/80 transition-colors"
            >
              <p class="block leading-[1.4] text-nowrap whitespace-pre">
                Privacy Policy
              </p>
            </a>
          </div>
        </div>
        <div class="flex gap-4 items-center justify-center relative shrink-0 text-white">
          <div class="text-xs leading-[0] relative shrink-0 text-center text-nowrap">
            <p class="block leading-[1.4] whitespace-pre">Built By <span className="uppercase font-grotesk text-white -tracking-wider">Goody</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
