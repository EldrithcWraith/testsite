var padding = {top:0, right:0, bottom:0, left:0},
            w = 450 - padding.left - padding.right,
            h = 450 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()
            //randomNumbers = getRandomNumbers();
        //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
        var data = [
                    {"label":"Harezm",  "value":1,  "question":"Hârezmi’ bin Cebir Kitabı okuyucuya, amacı, İslamın ilk asırlarında, çalışmalarıyla, bilginin ilerlenmesine öncülük eden bilginlerin ve bilgelerin, aydınların ve bilim adamlarının üstün başarılarını vurgulamak olan Pākistan-Hijra Council'n Temel Kitaplar Projesi çerçevesinde, İngilizce olarak sunulmuştur.Hârezmi'nin 'Cebir' metnini tamamlamak için, oraya,İbn Türk'ün 'Cebir'inden alınma bir 'Bölüm'de eklenmiştir. Hârezmi'nin yakın bir çağdaşı olan Ebu'l-Fazl Abdülhamid el-Vâsî ibn Türk de, bir Cebir Kitabı (Kitâb el-Cebr ve'l-Mukabele) kaleme almıştır. Bu eser, artık,elde mevcut değildir, ama ondan günümüze bir 'Bölüm' kalmıştır. İşte bu 'Bölüm' Prof. Aydın Sayılı tarafından, Katışık Denklemlerde Mantiki Zarûretler başlığıyla, 1962'de, çevrilmiş ve yayınlanmıştır. Bölüm'ün bu eldeki cilde dercedilmiş olması, cebirin gelişmesinde çağdaşı bir inkişafı gösterdiği kadar, aynı zamanda, erken devirdeki müslüman matematikçilerin yaratıcı dehâsı hakkında da dahaiyi bir perspektif temin edebilir."},
                    {"label":"Ali Kuşcu",  "value":2,  "question":"Ali Kuşçu, Fatih Külliyesi'nin öğretim programlarını hazırlamış, burada astronomi ve matematik dersleri vermiştir. Ayrıca İstanbul'un enlem ve boylamını ölçmüş ve çeşitli Güneş saatleride yapmıştır. Ali Kuşçu'nun medreselerde matematik derslerinin okutulmasında önemli rolü olmuştur. Verdiği dersler olağanüstü rağbet görmüş ve önemli bilim adamları tarafından da izlenmiştir. Ayrıca dönemin matematikçilerinden Sinan Paça da öğrencilerinden Molla Lütfi aracılığıyla Ali Kuşçu'nun derslerini takip etmiştir. Tüm bunların etkisi 16. yüzyılda ürünlerini verecektir.Ali Kuşçu'nun bilim dünyasına kazandırdığı önemli çalışmalardan birisi de Ay'ın ilk haritasını çıkarmasıdır. W. Barhold'un da dediği gibi Ali Kuşçu, 15. yüzyılın Batlamyusu'dur"},
                    {"label":"Piri Reis",  "value":3,  "question":"Piri Reis'e asıl ününü kazandıran ise çizdiği dünya haritasıdır. Haritanın Afrika ve İspanya'nın kuzey yukarısı ya eskiyerek kaybolmuş ya da yırtılıp atılmıştır. Bu eksik haliyle harita, İspanya, Doğu Afikra, Atlas Denizi ve Amerika'nın o dönemde bilinen yerleriyle Antiller adalarını kapsamaktadır Harita enlem ve boylam çizgileri olmayan, kıyıları ve adaları gösteren ve bölgelerin tanınmasını sağlayan portulan tipi bir haritadır. Portulanların özelliği içerdikleri haritaların yanı sıra, limanların, kıyıların özelllikleri, tehlikesiz yolların belirtilmesi gibi niteliklerede sahip olmalarıdır. Bu tip eserlerin en eskisi de Paris Milli Kitaplığı'nda bulunan ve Carte Pisane denilen harita olduğu iddia edilir. Orta Çağ İslam gemicilerinin de bu tür eserler yazdıkları,deniz ve kıyı haritaları yaptıkları bilinen gerçeklerdendir"},
                    {"label":"Katip Çelebi",  "value":4,  "question":"Katip Çelebi, Arapça ve Farsça'nın yanı sıra Fransızca ve Latince de öğrenerek, Batı'daki bilimsel gelişmeleri izlemiş ve pek çok tercüme yapmıştır. 1645'te kalemdeki görevinden ayrıldıktan üç yıl sonra Takvimü't-Tevarih isimli eserinin önemli görülmesi üzerine Şeyhülislam Abdürrahim Efendi aracılığıyla kalemde ikinci halifeliğe getirilmiştir. Osmanlı denizciliğinin tarihi anlattığı bu eserinde, Osmanlı donanmasının ve tersanelerinin işleyişine ve Kaptan-ı Deryaların hayat öykülerine de yer verir. Kitabın son bölümü,Osmanlı'nın denizcilikte daha başarılı olması için neler yapılması gerektiğiyle ilgili öğütlerden oluşmaktadır.Yaptığı tercümeler de dahil edilirse, yirmiden fazla eser yazan Katip Çelebi'nin en önemli eserleri din, tarih, coğrafya ve bibliyografya alanındadır. Astronomiyle ilgili birçok eseri de dilimize çeviren Katip Çelebi, dünyanın yuvarlak olduğuna ilişkin teorik metinlere özel önem vermiştir. En önemli eseri ise, daha önce de belirttiğimiz gibi, Uzakdoğu'dan Ortadoğu'ya kadar çok geniş bir coğrafyayı ele aldığı Cihannüma adlı kitabıdır.1648'de yazmaya başladığı Cihannüma'da 5 yerine 6 kıtadan kıtadan bahseden Katip Çelebi, bu kıtaları şöyle sıralıyordu: Avrupa, Asya, Afrika, Amerika, Maccoloníka (Avustralya) ve Kutup bölgeleri. Eserde, Japonya'dan ve Anadolu'nun doğusundan da söz edilmekteydi."},
                    {"label":"Takiyuddin",  "value":5,  "question":"Osmanlıların kullanmış oldukları hesaplama yöntemlerini,yani Hint Hesabı denilen onluk yöntemle Müneccim Hesabı denilen altmışlık yöntemi tanıtmak maksadıyla yazmış olduğu Aritmetikten Beklediklerimiz adlı yapıtında Takiyuddin, ondalık kesirleri altmışlık kesirlerin bir alternatifi olarak göstermiştir.Daha sonra dokuz başlık altında, ondalık kesirli sayıların iki katının ve yarısının alınması, toplanması, çıkarılması, çarpılması,bölünmesi, karekökünün alınması, altmışlık kesirlerin ondalık kesirlere ve ondalık kesirlerin altmışlık kesirlere dönüştürülmesi işlemlerinin nasıl yapılacağını birer örnekle açıklamıştır. Ancak Takiyuddin'in tam sayı ile kesrini birbirinden ayırmak için bir simge kullanmadığı veya geliştirmediği görülmektedir. Örneğin, 532.876 sayısını, 5 Yüzler 3 Onlar 2 Birler 8 Ondabirler 7 Yüzdebirler 6 Bindebirler biçiminde veya 532876 Bindebirler biçiminde sözel olarak ifade etmekle yetinmiştir."},
                    {"label":"Mimar Sinan",  "value":6,  "question":"Mimar Sinan'ın, Kayseri'nin Ağırnas köyünde doğduğu tahmin edilmektedir. 1511'de Yavuz Sultan Selim zamanında devşirme olarak İstanbul'a geldiği söylenir, ancak bu konuda hiçbir somut bilgi yoktur. Mimar olarak Yavuz Sultan Selim'in Mısır seferine katılmıştır. 1521 yılında Kanuni Sultan Süleyman'ın Belgrad seferine ise Yeniçeri olarak katılan Sinan,1522 de Rodos seferine Atlı Sekban olarak katılıp, 1526 Mohaç Meydan Savaşı'ndan sonra, gösterdiği yararlıklar sebebiyle tage dir edilerek Acemi Oğlanlar Yayabaşılığına (Bölük Komutam) terfi ettirilmiştir. 1533 yılında Kanuni Sultan Süleyman'ın İran seferi sırasında, Van gölünü geçebilmek için iki haftada üç adet kadırga inşa etmesiyle hem ilgi çekmiş hem de takdir toplamış- tir. Bu seferden dönüşte, Yeniçeri Ocağı'nda itibarı yüksek olan Hasekilik rütbesiyle onurlandırılmıştır. Bu rütbeyle, 1537 Korfu, Pulya ve 1538 Moldavya seferlerine de katılmış, 1538 yılında.Hassa başmimarı olmuştur."},
                    {"label":"Matrakçı Nasuh",  "value":7,  "question":"Matrakçı Nasuh Kanuni dönemi matematikçi, coğrafyacı,tarihçi, hattat, minyatürcü, ressam ve silahşörlerindendir. Enderùn'da öğrenim görmüş, II. Bayezit devri önemli hocalarından Sa'i'den ders almıştır. Sopalarla oynanan ve bir tür savaş oyunu olan matrak adlı sporda ustalığında dolayı matrakçı lakabıyla anılmıştır. Değişik silahları kullanmaktaki ustalığı da bilinmekte olup bu konuda Tuhfetü-l Guzat adlı bir kitap da yazmiştır.Nasuh, özellikle geometri ve matematik alanlarında önemli bir bilim adamıydı. Matematiği ilgilendiren eseri Umdetü'l-Hisab (1533) adını alır.İki bölümden oluşur. Birinci bölüm kuralları ve genel konuları ele alır. ikinici bölümde ise 50 kadar problemin çözümü verilmiştir. Bu yapitlardan sonuncusu uzun yıllar matematikçilerin elkitabı olarak kullanılmıştır.Geometri ve matematik alanındaki çalışmaları neticesinde uzunluk ölçülerini hazrlamıştır. I. Selim zamanında ona adadığı Cemalül-Küttab ve Kemalü'l- Hisab kitaplarini yazmıştır."},
                    {"label":"Evliya Çelebi",  "value":8,  "question":"En önemli ve tek eseri Seyahatname: Tarih-i Seyyah (10 cilt),gezdiği ülkelerin ve illerin tarihi coğrafya, topografya ve etnografyası bakımından çok önemli bilgiler veren son derece önemli bir eserdir. Osmanlı dönemine ait bu alandaki kitapların en geniş kapsamlısı olması itibariyle, genel kültür tarihi için zengin ve değerli bir bilgi hazinesi olarak kabul edilir. Kitabın büyük kısmı Evliya Çelebi'nin kendi gözlemlerine dayanmaktadır, ancak bazı yerler hayali hikayelerle süslenmiştir. Somut tarihi ve istatistiki bilgiler için Kazvini, Makrizi, Taberi, Zehebi, Celalazade Salih, Ali ve Solakzade gibi alimlerin ortaya koyduğu bilgilerden ve kanunnameler, eyalet tahrirleri,menakıbnameler, sicil ve evkaf kayırları gibi belgelerden faydalanan Evliya Çelebi,coğrafyacılığının yanında önemli bir gözlemci olarak da bilinir."},
                    {"label":"Farabi",  "value":9,  "question":"Fârâbî, çağdaşı olan bilgelikseverlerden ne Kindî'nin ne de Zekeriya Râzi'nin yaptığını göremediğimiz bir işi daha başarmıştır. Bu iş, İslâm Âleminde Siyaset Bilimi (Political Science)ni kurmuş olmaktır. Gerçi, bu tür bir değerlendirmeye Türkçe literatürde de rastlanmıştır. Muhsin Mehdiye göre, Fârâbînin bütün eserlerinin, Evren üzerine açıklamalarla başlayıp, asıl, Toplum'a ve İnsan'a ilişkin konulara gelmekten ibaret olan o hiç bir yerde işitilmedik, çağdaşlarından hiç bir kimsede alışılmadık, ne İslâm'da, ne İslâm öncesi hiçbir eserde bir örneği daha görülmedik iç düzenlemesi, ancak, onun bu yeni bilim dalını yaratmış olması gibi bir gerekçe ile açıklanabilir.Fârâbînin Siyâset teorisi onun, al- 'Akl al-Fa âl Teorisi ne dayanmaktadır. Onun al- 'Akl al-Fa 'âl Teorisi ise onun On Akıl Dokuz Felek Teorisi'ne dayanmaktadır. Böylece al-Akl al-Fa âl Teorisi, On AkılDokuz Felek Teorisi'ne, Siyaset teorisi, On Akıl Dokuz Felek Teorisine Siyaset Teorisi yine kendisinin kurmuş olduğu işte bu Siyaset Bilimi nedayalı bulunmaktadır."}
        ];
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(d, i){ return color(i); })
            .attr("d", function (d) { return arc(d); });
        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].label;
            });
        container.on("click", spin);

        var resultValue = null;

        function handleSpinningResult() {
            console.log(resultValue);
        }

        function spin(d, handleSpinningResult){
            
            container.on("click", null);
            //all slices have been seen, all done
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                console.log("done");
                container.on("click", null);
                return;
            }
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");
                    //populate question
                    d3.select("#question h1")
                        .text(data[picked].question);
                    d3.select("#question h2")
                        .text(data[picked].label);
                    oldrotation = rotation;
              
                    /* Get the result value from object "data" */
                    console.log(data[picked].value)
              
                    /* Comment the below line for restrict spin to sngle time */
                    container.on("click", spin);

                    resultValue = data[picked].value;
                });
        }
        //make arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"black"});
        //draw spin circle
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});
        //spin text
        container.append("text")
            .attr("x", -1)
            .attr("y", 10)
            .attr("text-anchor", "middle")
            .text("ÇEVİR")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        function useResultValue() {
            console.log(resultValue);
            // Perform actions based on resultValue
        }
        
        function getRandomNumbers(){
            var array = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                //no support for crypto, get crappy random numbers
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        }
       // function checkOrientationAndReload() {
           //   if (window.innerWidth < window.innerHeight) {
            //    // Dikey konumda
             //   alert("Telefonu yatay olarak çevirin!");
            //    location.reload();
           //   } 
           // }
      
          // Sayfa yüklenirken ve telefonun orientasyonu değiştiğinde kontrol et
         //   window.onload = checkOrientationAndReload;
         //   window.onorientationchange = checkOrientationAndReload;
      
        function redirectToPage() {
            // You can use window.location.href to navigate to a specific URL
            useResultValue();
            window.location.href = resultValue + ".html";
        }

        function toggleDarkMode() {
            const body = document.body;
        
            // Check if dark mode is enabled
            const isDarkMode = body.classList.contains('dark-mode');
        
            // Toggle between dark and light mode
            body.classList.toggle('dark-mode', !isDarkMode);
        
            // Update CSS variables based on mode
            const backgroundColor = isDarkMode ? '--background-color-light' : '--background-color-dark';
            const textColor = isDarkMode ? '--text-color-light' : '--text-color-dark';
        
            body.style.backgroundColor = `var(${backgroundColor})`;
            body.style.color = `var(${textColor})`;
        }
        