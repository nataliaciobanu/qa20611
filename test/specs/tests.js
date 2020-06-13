describe ('Test of counters', () =>{
    it ('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        expect(actualTitle).toEqual(expectedTitle);
    });
    it('Verify that a header exists on the top of the page and its named as "Counters', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const title = $("//h1[@class='header']");
        expect(title.getText()).toEqual('Counters');
    });
    it('Verify that the input field for counter title is present on the page with default value "Counter Name"!', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const counterName = $("//input[@name='name']");
        expect(counterName.getAttribute('value')).toEqual('Counter Name');
    });
    it('Verify that the input field for Initial Count is present on the page with default value "50".', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const initialCount = $("//input[@name='value']");
        expect(initialCount.getAttribute('value')).toEqual('50');
    });

    it('Verify that Counter Name input field has a title next to it: "Enter Counter Title:"', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const counterName = $("//label[../input[@name='name']]");
        expect(counterName.getText()).toEqual('Enter Counter Title:');
    });

    it('Verify that Initial Count input field has a title next to it:  "Enter Initial Count:"', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const initialCount = $("//label[../input[@name='value']]");
        expect(initialCount.getText()).toEqual('Enter Initial Count:');
    });

    it('Verify that Total Result element is present under the Header and it\'s initial value is 0 by default', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const totalResult = $("//h3[@class=\"total-count\"]");
        const res = totalResult.getText().split('Total: ')[1];
        expect(res).toEqual('0');
    });

    it('Verify that Count element is present in UI and it\'s default value is equal to 0', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const totalResult = $("//span[@class=\"badge primary badge-primary\"]");
        const res = totalResult.getText();
        expect(res).toEqual('0');
    });

    it('Verify the name of default counter, it must be equal to \'Default Counter\'', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const defaultCounter = $("//h3[../@class=\'row align-items-center justify-content-center\']");
        const defC = defaultCounter.getText().split('.')[1];
        expect(defC).toEqual(' Default Counter');
    });

    it('Verify tha label next to \'Edit Counter Title\' field, it must be equal to  "Edit Counter Title" ', function () {
        //browser.url('https://likejean.github.io/homework-5/');
        const editTitle = $("//label[../input [ @name = 'edit']]");
        expect(editTitle.getText()).toEqual('Edit Counter Title:');
    });

});
