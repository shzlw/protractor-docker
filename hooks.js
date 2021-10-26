var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { BeforeAll, After, AfterAll, Status } = require('@cucumber/cucumber');
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
             const screenShot = await browser.takeScreenshot();
             this.attach(screenShot, "image/png");
        }
        */
        const screenShot = yield browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFN0UsS0FBSyxDQUFDLFVBQWUsUUFBUTs7UUFDekI7Ozs7OztVQU1FO1FBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9