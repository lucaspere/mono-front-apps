let count = 1000;

export const helpers = (function () {
  function newTimer(attrs: any) {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: (count++).toString(), // eslint-disable-line no-undef
      elapsed: 0,
    };

    return timer;
  }

  function findById(array: any, id: any, cb: any) {
    array.forEach((el: any) => {
      if (el.id === id) {
        cb(el);
        return;
      }
    });
  }

  function renderElapsedString(elapsed: any, runningSince: any) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }

    return millisecondsToHuman(totalElapsed);
  }

  function millisecondsToHuman(ms: number) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60)  % 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');
    console.log(humanized)
    return humanized;
  }

  function pad(numberString: string, size: number) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

  return {
    millisecondsToHuman,
    newTimer,
    findById,
    renderElapsedString,
  };
})();
