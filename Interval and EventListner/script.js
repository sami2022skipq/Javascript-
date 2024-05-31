      const sayHello = () => {
        console.log(Date.now());
      };
      let interval
      document.querySelector("#start").addEventListener("click", () => {
        if (!interval) {
          interval = setInterval(sayHello, 100);
          console.log("intervalstart");
        }
      });
      document.querySelector("#stop").addEventListener("click", () => {
        if (interval) {
          console.log("Interval stoped");
          clearInterval(interval);
          interval = null;
        }
      });