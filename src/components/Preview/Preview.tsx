import { FC, useEffect, useRef } from "react";

interface PreviewProps {
  code: string;
}

const html = `
<html>
  <head></head>
  <body>
    <div id="root">
    </div>
    <script>
      window.addEventListener('message', (e) => {
        try {
          eval(event.data);
        } catch (error) {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>'
          console.error(error);
        }
      }, false);
    </script>
  </body>
</html>
`;

const Preview: FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <iframe
      ref={iframe}
      title="preview-code"
      sandbox="allow-scripts"
      srcDoc={html}
    />
  );
};

export default Preview;