import Page from './page-model';

const page = new Page();

fixture(`ps02-aquacomfort-public`).page`https://www.pannekoeksoftware.nl/site/check`;

//https://devexpress.github.io/testcafe/documentation
//testcafe chrome ps02.testcafe.js

test('Test www.aqua-comfort.nl', async t => {
  await t
    //
    .navigateTo('https://www.aqua-comfort.nl/')
    .expect(page.text01.innerText)
    .contains('Aqua Comfort is al meer dan 24 jaar specialist in waterbedden')
    //
    .navigateTo('/slaapsystemen/')
    .expect(page.text01.innerText)
    .contains('Samen met u kunnen wij het juiste slaapsysteem vinden.')
    //
    .navigateTo('/profine/')
    .expect(page.text01.innerText)
    .contains('wereld van ultiem slaapgenot!')
    //
    .navigateTo('/zen-sleep/')
    .expect(page.text01.innerText)
    .contains('materiaal is Oekotex gecertificeerd')
    //
    .navigateTo('/stretchtop/')
    .expect(page.text01.innerText)
    .contains('De softside van Stretchtop is gemaakt met een split.')
    //
    .navigateTo('/slaapkamers/')
    .expect(page.text01.innerText)
    .contains('U vindt in onze showroom in Lunteren')
    //
    .navigateTo('/boxsprings/')
    .expect(page.text01.innerText)
    .contains('een grote collectie boxsprings')
    //
    .navigateTo('/verhuizen/')
    .expect(page.h1.innerText)
    .contains('Verhuizen van waterbedden')
    //
    .navigateTo('/service-contract/')
    .expect(page.text01.innerText)
    .contains('Heeft u op dit moment een Service Contract')
    //
    .navigateTo('/boxsprings/')
    .expect(page.text01.innerText)
    .contains('een grote collectie boxsprings')
    //
    .navigateTo('/garantie/')
    .expect(page.text01.innerText)
    .contains('goederen zijn de garantiebepalingen van Stretchtop')
    //
    .navigateTo('/onderhoud/')
    .expect(page.text01.innerText)
    .contains('Bij het installeren geeft de monteur u instructies')
    //
    .navigateTo('/');
});
