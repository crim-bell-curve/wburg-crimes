function generateCharts() {

    var chart = c3.generate({
        data: {
            columns: [
                ["Aggravated Assault", 35],
                ["Burglary", 60],
                ["Murder", 3],
                ["Rape", 2],
                ["Robbery", 23],
                ["Simple Assault", 233]
            ],
            type : 'donut'
        },
        donut: {
            title: "Type of Crime"
        },
        bindto: '#donut'
    });

    var chart = c3.generate({
        data: {
            columns: [
                ['Crimes', 14,25,22,21,17,18,10,10,12,29,22,23,29,28,29,32,14]
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: ["August 2009", "September 2009", "October 2009", "November 2009", "December 2009",
                  "January 2010", "February 2010", "March 2010", "April 2010", 
                  "May 2010", "June 2010", "July 2010", "August 2010", "September 2010", 
                  "October 2010", "November 2010", "December 2010"]
            },
            y: {
                label: 'Number of Crimes'
            }
        },
        legend: {
            show: false
        },
        bindto: '#time'
    });

    var gender_chart = c3.generate({
        data: {
            columns: [
                ['Women', 21, 39, 0, 2, 8, 113],
                ['Men', 18, 21, 3, 0, 11, 79]
            ],
            type: 'bar',
            colors: {
                Women: '#3BB6C5',
                Men: '#EF616D'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }

        },
        axis: {
            x : {
                type: 'category',
                categories: ["Aggravated Assault", "Burglary", "Murder", "Rape", "Robbery", "Simple Assault"]
            }
        },
        bindto: '#gender_bar'
    });

    var race_colors = ['#3BB6C5', '#F3E0A8', '#EF616D']
    var race_chart_raw = c3.generate({
        data: {
            columns: [
                ['Asian', 0, 2, 0, 0, 3, 1],
                ['Black', 77, 9, 1, 0, 4, 99],
                ['White', 21, 39, 1, 2, 12, 113]
            ],
            type: 'bar',
            colors: {
                Asian: '#3BB6C5', 
                Black: '#F3E0A8', 
                White: '#EF616D'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }

        },
        axis: {
            x : {
                type: 'category',
                categories: ["Aggravated Assault", "Burglary", "Murder", "Rape", "Robbery", "Simple Assault"]
            },
            y: {
                label: 'number'
            }
        },
        bindto: '#raw_race_bar'
    });

    var race_chart_adj = c3.generate({
        data: {
            columns: [
                ['Asian', 0, 24, 0, 0, 55, 2],
                ['Black', 95, 41, 84, 0, 28, 80],
                ['White', 5, 35, 16, 100, 16, 18]
            ],
            type: 'bar',
            colors: {
                Asian: '#3BB6C5', 
                Black: '#F3E0A8', 
                White: '#EF616D'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }

        },
        axis: {
            x : {
                type: 'category',
                categories: ["Aggravated Assault", "Burglary", "Murder", "Rape", "Robbery", "Simple Assault"]
            },
            y: {
                max: 90,
                label: 'percentage'
            }
        },
        bindto: '#adj_race_bar'
    });

    var chart = c3.generate({
        data: {
            columns: [
                ['Number of Victims', 1, 1, 1, 1, 1, 1, 2, 3, 1, 5, 5, 8, 7, 5, 3, 11, 7, 20, 8, 14, 8, 8, 17, 14, 12, 6, 5, 7, 4, 8, 5, 6, 3, 3, 6, 4, 5, 8, 2, 5, 5, 3, 7, 3, 3, 5, 3, 5, 5, 4, 1, 1, 5, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1]
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 67, 71, 74, 75, 82, 84, 88],
                label: 'Age'
            },
            y: {
                label: 'Number of Victims'
            }
        },
        legend: {
            show: false
        },
        bindto: '#age_line'
    });
    ['#time-Crime Over Time', 
    '#gender_bar-Victims by Gender', 
    '#raw_race_bar-Victims by Race', 
    '#adj_race_bar-Victims by race (adjusted for relative population)', 
    '#age_line-Victims by Age'].forEach(function(info) {

        d3.select(info.split('-')[0] +' svg').append('text')
            .attr('x', d3.select('#time svg').node().getBoundingClientRect().width / 2)
            .attr('y', 16)
            .attr('text-anchor', 'middle')
            .style('font-size', '1.4em')
            .text(info.split('-')[1]); 
    })
}

function generateTable() {
    var raw_data = [["Aggravated Assault","08/31/2010","ASSAULT-AGGRAVATED","WPD","VI",19,"B","M","10001331"],["Aggravated Assault","08/31/2010","ASSAULT-AGGRAVATED","WPD","VI","","","","10001331"],["Aggravated Assault","08/31/2010","ASSAULT-AGGRAVATED","WPD","VI",18,"B","M","10001331"],["Aggravated Assault","05/30/2010","ASSAULT-AGGRAVATED","WPD","VI",27,"W","M","10000768"],["Aggravated Assault","11/23/2009","ASSAULT-AGGRAVATED-DOMESTIC","WPD","VI",32,"W","F","9018255"],["Aggravated Assault","11/23/2009","ASSAULT-AGGRAVATED-DOMESTIC","WPD","VI",16,"B","F","9018255"],["Aggravated Assault","11/25/2010","ASSAULT-AGGRAVATED-SEXUAL ASSAULT/BATTERY","WPD","VI",8,"W","F","10001843"],["Aggravated Assault","08/05/2010","ASSAULT-AGGRAVATED-SEXUAL ASSAULT/BATTERY","WPD","VI",2,"B","F","10001169"],["Aggravated Assault","12/11/2009","ASSAULT-AGGRAVATED/ATMP MURDER","WPD","VI","","","","9018346"],["Aggravated Assault","12/11/2009","ASSAULT-AGGRAVATED/ATMP MURDER","WPD","VI",18,"B","M","9018346"],["Aggravated Assault","06/04/2010","ASSAULT-AGGRAVATED/ATMP MURDER","WPD","VI",31,"W","M","10000794"],["Aggravated Assault","11/27/2009","ASSAULT-POLICE OFFICER","WPD","VI",5,"W","F","9018270"],["Aggravated Assault","11/27/2009","ASSAULT-POLICE OFFICER","WPD","VI","","","","9018270"],["Aggravated Assault","09/03/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",37,"W","M","10001345"],["Aggravated Assault","09/03/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",21,"W","M","10001345"],["Aggravated Assault","09/03/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI","","","","10001345"],["Aggravated Assault","10/16/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",40,"W","F","10001587"],["Aggravated Assault","11/07/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",42,"W","M","10001732"],["Aggravated Assault","05/21/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",28,"W","M","10000722"],["Aggravated Assault","05/21/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI","","","","10000722"],["Aggravated Assault","02/19/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",24,"W","F","10000200"],["Aggravated Assault","10/17/2010","BRANDISH FIREARM","WPD","VI",23,"B","F","10001594"],["Aggravated Assault","08/12/2009","BRANDISH FIREARM","WPD","VI",43,"W","M","9017693"],["Aggravated Assault","08/12/2009","BRANDISH FIREARM","WPD","VI",19,"W","M","9017693"],["Aggravated Assault","08/12/2009","BRANDISH FIREARM","WPD","VI","","","","9017693"],["Aggravated Assault","10/01/2010","BRANDISH FIREARM","WPD","VI",32,"W","M","10001517"],["Aggravated Assault","12/31/2009","MAIMING","WPD","VI",26,"W","F","9018430"],["Aggravated Assault","11/01/2009","MAIMING","WPD","VI",43,"W","M","9018131"],["Aggravated Assault","06/23/2010","MAIMING","WPD","VI",21,"B","F","10000899"],["Aggravated Assault","08/22/2009","MAIMING","WPD","VI",24,"W","M","9017743"],["Aggravated Assault","09/01/2010","MAIMING","WPD","VI",45,"W","M","10001332"],["Aggravated Assault","08/15/2009","MAIMING","WPD","VI",33,"W","M","9017704"],["Aggravated Assault","09/03/2010","MAIMING","WPD","VI","","","","10001345"],["Aggravated Assault","09/03/2010","MAIMING","WPD","VI",21,"W","M","10001345"],["Aggravated Assault","09/03/2010","MAIMING","WPD","VI",37,"W","M","10001345"],["Burglary","09/04/2009","BURGLARY-BUSINESS","WPD","VI","","","","9017821"],["Burglary","08/08/2009","BURGLARY-BUSINESS","WPD","VI","","","","9017665"],["Burglary","03/24/2010","BURGLARY-BUSINESS","WPD","VI","","","","10000374"],["Burglary","12/26/2009","BURGLARY-BUSINESS","WPD","VI","","","","9018407"],["Burglary","10/16/2009","BURGLARY-BUSINESS","WPD","VI","","","","9018043"],["Burglary","05/23/2010","BURGLARY-BUSINESS","WPD","VI",57,"W","F","10000732"],["Burglary","10/16/2009","BURGLARY-BUSINESS","WPD","VI","","","","9018043"],["Burglary","01/28/2010","BURGLARY-BUSINESS","WPD","VI","","","","10000115"],["Burglary","07/02/2010","BURGLARY-BUSINESS","WPD","VI","","","","10000959"],["Burglary","01/26/2010","BURGLARY-BUSINESS","WPD","VI","","","","10000108"],["Burglary","11/28/2010","BURGLARY-RESIDENTIAL","WPD","VI",75,"B","M","10001857"],["Burglary","11/19/2010","BURGLARY-RESIDENTIAL","WPD","VI",40,"B","M","10001802"],["Burglary","08/01/2009","BURGLARY-RESIDENTIAL","WPD","VI",39,"W","F","9017626"],["Burglary","04/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",43,"B","F","10000495"],["Burglary","04/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",28,"B","F","10000495"],["Burglary","10/29/2010","BURGLARY-RESIDENTIAL","WPD","VI",26,"W","M","10001682"],["Burglary","10/29/2010","BURGLARY-RESIDENTIAL","WPD","VI",23,"W","F","10001682"],["Burglary","10/19/2010","BURGLARY-RESIDENTIAL","WPD","VI",26,"W","M","10001614"],["Burglary","10/19/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","F","10001614"],["Burglary","05/21/2010","BURGLARY-RESIDENTIAL","WPD","VI",52,"W","F","10000721"],["Burglary","05/16/2010","BURGLARY-RESIDENTIAL","WPD","VI","","","","10000694"],["Burglary","05/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","F","10000694"],["Burglary","05/21/2010","BURGLARY-RESIDENTIAL","WPD","VI",null,"W","M","10000721"],["Burglary","09/24/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","M","10001477"],["Burglary","09/24/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","M","10001477"],["Burglary","11/28/2010","BURGLARY-RESIDENTIAL","WPD","VI",21,"A","F","10001858"],["Burglary","11/28/2010","BURGLARY-RESIDENTIAL","WPD","VI",21,"W","F","10001858"],["Burglary","11/28/2010","BURGLARY-RESIDENTIAL","WPD","VI",21,"W","F","10001858"],["Burglary","11/28/2010","BURGLARY-RESIDENTIAL","WPD","VI",22,"W","F","10001858"],["Burglary","11/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",84,"W","M","10001775"],["Burglary","11/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",82,"W","F","10001775"],["Burglary","12/02/2010","BURGLARY-RESIDENTIAL","WPD","VI",33,"B","F","10001884"],["Burglary","04/30/2010","BURGLARY-RESIDENTIAL","WPD","VI",19,"W","F","10000584"],["Burglary","06/12/2010","BURGLARY-RESIDENTIAL","WPD","VI",19,"W","F","10000842"],["Burglary","08/09/2009","BURGLARY-RESIDENTIAL","WPD","VI",22,"B","F","9017669"],["Burglary","11/15/2010","BURGLARY-RESIDENTIAL","WPD","VI",22,"W","M","10001773"],["Burglary","11/15/2010","BURGLARY-RESIDENTIAL","WPD","VI",19,"W","M","10001773"],["Burglary","12/02/2010","BURGLARY-RESIDENTIAL","WPD","VI",49,"W","F","10001878"],["Burglary","11/17/2009","BURGLARY-RESIDENTIAL","WPD","VI",27,"B","M","9018220"],["Burglary","11/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",50,"W","M","10001776"],["Burglary","11/16/2010","BURGLARY-RESIDENTIAL","WPD","VI",40,"W","F","10001776"],["Burglary","08/25/2010","BURGLARY-RESIDENTIAL","WPD","VI",59,"W","M","10001303"],["Burglary","08/25/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","M","10001303"],["Burglary","12/08/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","M","10001922"],["Burglary","12/08/2010","BURGLARY-RESIDENTIAL","WPD","VI",24,"W","M","10001922"],["Burglary","08/01/2009","BURGLARY-RESIDENTIAL","WPD","VI",64,"W","M","9017629"],["Burglary","06/27/2010","BURGLARY-RESIDENTIAL","WPD","VI",61,"W","M","10000926"],["Burglary","01/12/2010","BURGLARY-RESIDENTIAL","WPD","VI",27,"A","F","10000042"],["Burglary","03/11/2010","BURGLARY-RESIDENTIAL","WPD","VI",26,"W","F","10000301"],["Burglary","12/29/2010","BURGLARY-RESIDENTIAL","WPD","VI",49,"W","F","10002030"],["Burglary","12/29/2010","BURGLARY-RESIDENTIAL","WPD","VI",19,"W","M","10002030"],["Burglary","10/21/2010","BURGLARY-RESIDENTIAL","WPD","VI",63,"W","M","10001629"],["Burglary","05/08/2010","BURGLARY-RESIDENTIAL","WPD","VI",75,"W","F","10000647"],["Burglary","02/24/2010","BURGLARY-RESIDENTIAL","WPD","VI",25,"B","F","10000234"],["Burglary","03/21/2010","BURGLARY-RESIDENTIAL","WPD","VI",48,"W","F","10000364"],["Burglary","10/21/2010","BURGLARY-RESIDENTIAL","WPD","VI",48,"W","F","10001624"],["Burglary","08/25/2010","BURGLARY-RESIDENTIAL","WPD","VI",19,"W","M","10001304"],["Burglary","08/25/2010","BURGLARY-RESIDENTIAL","WPD","VI",18,"W","F","10001304"],["Burglary","08/25/2010","BURGLARY-RESIDENTIAL","WPD","VI",19,"W","F","10001304"],["Burglary","09/12/2010","BURGLARY-RESIDENTIAL","WPD","VI",26,"B","F","10001412"],["Murder","12/05/2009","MURDER/NONNEGLIGENT MANSLAUGHTER","WPD","VI","","","","9018307"],["Murder","12/05/2009","MURDER/NONNEGLIGENT MANSLAUGHTER","WPD","VI",31,"B","M","9018307"],["Murder","04/19/2010","MURDER/NONNEGLIGENT MANSLAUGHTER","WPD","VI",25,"W","M","10000519"],["Rape","07/18/2010","FORCIBLE RAPE","WPD","VI",19,"W","F","10001065"],["Rape","09/30/2009","FORCIBLE RAPE","WPD","VI",19,"W","F","9017961"],["Robbery","04/06/2010","ROBBERY","WPD","VI",25,"W","M","10000438"],["Robbery","05/09/2010","ROBBERY","WPD","VI",18,"B","M","10000655"],["Robbery","05/09/2010","ROBBERY","WPD","VI","","","","10000655"],["Robbery","10/17/2009","ROBBERY","WPD","VI",27,"W","F","9018049"],["Robbery","12/06/2009","ROBBERY","WPD","VI",56,"W","F","9018319"],["Robbery","08/23/2010","ROBBERY","WPD","VI",19,"W","M","10001287"],["Robbery","08/23/2010","ROBBERY","WPD","VI",19,"W","F","10001287"],["Robbery","08/23/2010","ROBBERY","WPD","VI",19,"W","M","10001287"],["Robbery","08/23/2010","ROBBERY","WPD","VI",19,"W","F","10001287"],["Robbery","08/23/2010","ROBBERY","WPD","VI",19,"W","M","10001287"],["Robbery","09/07/2010","ROBBERY","WPD","VI",29,"W","M","10001371"],["Robbery","09/13/2010","ROBBERY","WPD","VI",21,"B","F","10001419"],["Robbery","10/13/2009","ROBBERY","WPD","VI",22,"A","F","9018026"],["Robbery","10/13/2009","ROBBERY","WPD","VI",19,"A","F","9018026"],["Robbery","10/13/2009","ROBBERY","WPD","VI",18,"A","F","9018026"],["Robbery","11/16/2009","ROBBERY","WPD","VI",17,"W","M","9018217"],["Robbery","11/16/2009","ROBBERY","WPD","VI",17,"B","M","9018217"],["Robbery","07/04/2010","ROBBERY","WPD","VI",19,"W","M","10000973"],["Robbery","01/23/2010","ROBBERY","WPD","VI",47,"W","M","10000093"],["Robbery","09/24/2009","ROBBERY-CARJACKING","WPD","VI",38,"B","M","9017934"],["Robbery","08/27/2009","ROBBERY-COMMERCIAL / BUSINESS","WPD","VI","","","","9017772"],["Robbery","04/07/2010","ROBBERY-COMMERCIAL / BUSINESS","WPD","VI","","","","10000439"],["Simple Assault","03/07/2010","ASSAULT-SIMPLE","WPD","VI",25,"B","F","10000288"],["Simple Assault","09/26/2009","ASSAULT-SIMPLE","WPD","VI",23,"W","M","9017940"],["Simple Assault","09/26/2009","ASSAULT-SIMPLE","WPD","VI",25,"W","M","9017940"],["Simple Assault","09/26/2009","ASSAULT-SIMPLE","WPD","VI","","","","9017940"],["Simple Assault","10/07/2009","ASSAULT-SIMPLE","WPD","VI",17,"B","F","9017988"],["Simple Assault","11/17/2010","ASSAULT-SIMPLE","WPD","VI",64,"W","F","10001786"],["Simple Assault","11/17/2010","ASSAULT-SIMPLE","WPD","VI","","","","10001786"],["Simple Assault","05/16/2010","ASSAULT-SIMPLE","WPD","VI",24,"W","F","10000694"],["Simple Assault","05/16/2010","ASSAULT-SIMPLE","WPD","VI","","","","10000694"],["Simple Assault","04/01/2010","ASSAULT-SIMPLE","WPD","VI",48,"B","M","10000418"],["Simple Assault","01/04/2010","ASSAULT-SIMPLE","WPD","VI",12,"B","F","10000011"],["Simple Assault","01/07/2010","ASSAULT-SIMPLE","WPD","VI",13,"W","F","10000024"],["Simple Assault","11/15/2010","ASSAULT-SIMPLE","WPD","VI",19,"W","F","10001771"],["Simple Assault","11/15/2010","ASSAULT-SIMPLE","WPD","VI",44,"W","F","10001771"],["Simple Assault","12/23/2009","ASSAULT-SIMPLE","WPD","VI",46,"W","M","9018398"],["Simple Assault","12/23/2009","ASSAULT-SIMPLE","WPD","VI","","","","9018398"],["Simple Assault","10/04/2010","ASSAULT-SIMPLE","WPD","VI",31,"B","F","10001528"],["Simple Assault","08/01/2009","ASSAULT-SIMPLE","WPD","VI",45,"B","F","9017628"],["Simple Assault","10/10/2009","ASSAULT-SIMPLE","WPD","VI",17,"B","M","9018013"],["Simple Assault","10/10/2009","ASSAULT-SIMPLE","WPD","VI",17,"B","M","9018013"],["Simple Assault","10/10/2009","ASSAULT-SIMPLE","WPD","VI","","","","9018013"],["Simple Assault","06/13/2010","ASSAULT-SIMPLE","WPD","VI",43,"B","F","10000849"],["Simple Assault","10/08/2009","ASSAULT-SIMPLE","WPD","VI",32,"W","F","9017996"],["Simple Assault","11/28/2010","ASSAULT-SIMPLE","WPD","VI",67,"W","F","10001863"],["Simple Assault","11/28/2010","ASSAULT-SIMPLE","WPD","VI",71,"W","M","10001863"],["Simple Assault","10/08/2009","ASSAULT-SIMPLE","WPD","VI",30,"W","F","9017996"],["Simple Assault","08/08/2010","ASSAULT-SIMPLE","WPD","VI",28,"B","F","10001194"],["Simple Assault","08/08/2010","ASSAULT-SIMPLE","WPD","VI",38,"B","F","10001194"],["Simple Assault","06/28/2010","ASSAULT-SIMPLE","WPD","VI",20,"B","F","10000935"],["Simple Assault","03/05/2010","ASSAULT-SIMPLE","WPD","VI",11,"W","M","10000282"],["Simple Assault","09/09/2009","ASSAULT-SIMPLE","WPD","VI",13,"W","M","9017851"],["Simple Assault","04/12/2010","ASSAULT-SIMPLE","WPD","VI",37,"W","F","10000469"],["Simple Assault","09/11/2009","ASSAULT-SIMPLE","WPD","VI",40,"W","M","9017857"],["Simple Assault","09/11/2009","ASSAULT-SIMPLE","WPD","VI",48,"W","M","9017857"],["Simple Assault","09/11/2009","ASSAULT-SIMPLE","WPD","VI","","","","9017857"],["Simple Assault","04/29/2010","ASSAULT-SIMPLE","WPD","VI",24,"W","M","10000575"],["Simple Assault","04/29/2010","ASSAULT-SIMPLE","WPD","VI",51,"W","M","10000575"],["Simple Assault","01/15/2010","ASSAULT-SIMPLE","WPD","VI",55,"W","M","10000052"],["Simple Assault","09/04/2009","ASSAULT-SIMPLE","WPD","VI",44,"W","M","9017828"],["Simple Assault","09/04/2009","ASSAULT-SIMPLE","WPD","VI","","","","9017828"],["Simple Assault","05/07/2010","ASSAULT-SIMPLE","WPD","VI",11,"B","F","10000636"],["Simple Assault","05/07/2010","ASSAULT-SIMPLE","WPD","VI",14,"B","F","10000636"],["Simple Assault","05/07/2010","ASSAULT-SIMPLE","WPD","VI",14,"B","M","10000636"],["Simple Assault","05/07/2010","ASSAULT-SIMPLE","WPD","VI",13,"W","M","10000636"],["Simple Assault","05/07/2010","ASSAULT-SIMPLE","WPD","VI",45,"W","F","10000636"],["Simple Assault","11/26/2010","ASSAULT-SIMPLE","WPD","VI",65,"W","F","10001845"],["Simple Assault","11/26/2010","ASSAULT-SIMPLE","WPD","VI",88,"W","F","10001845"],["Simple Assault","11/26/2010","ASSAULT-SIMPLE","WPD","VI",47,"W","F","10001845"],["Simple Assault","10/18/2009","ASSAULT-SIMPLE","WPD","VI",50,"B","F","9018060"],["Simple Assault","07/31/2010","ASSAULT-SIMPLE","WPD","VI",52,"B","M","10001142"],["Simple Assault","07/31/2010","ASSAULT-SIMPLE","WPD","VI",55,"B","M","10001142"],["Simple Assault","01/19/2010","ASSAULT-SIMPLE","WPD","VI",14,"B","F","10000072"],["Simple Assault","01/19/2010","ASSAULT-SIMPLE","WPD","VI",13,"B","F","10000072"],["Simple Assault","10/14/2010","ASSAULT-SIMPLE","WPD","VI",17,"B","F","10001575"],["Simple Assault","04/09/2010","ASSAULT-SIMPLE","WPD","VI",27,"W","M","10000451"],["Simple Assault","07/13/2010","ASSAULT-SIMPLE","WPD","VI",41,"W","M","10001037"],["Simple Assault","07/13/2010","ASSAULT-SIMPLE","WPD","VI","","","","10001037"],["Simple Assault","09/20/2009","ASSAULT-SIMPLE","WPD","VI",32,"B","M","9017914"],["Simple Assault","10/25/2009","ASSAULT-SIMPLE","WPD","VI",23,"W","F","9018100"],["Simple Assault","04/25/2010","ASSAULT-SIMPLE","WPD","VI",39,"W","F","10000554"],["Simple Assault","05/10/2010","ASSAULT-SIMPLE","WPD","VI",38,"B","F","10000658"],["Simple Assault","10/25/2010","ASSAULT-SIMPLE","WPD","VI",26,"B","M","10001660"],["Simple Assault","03/11/2010","ASSAULT-SIMPLE","WPD","VI",26,"W","F","10000301"],["Simple Assault","07/23/2010","ASSAULT-SIMPLE","WPD","VI",15,"B","M","10001102"],["Simple Assault","09/12/2009","ASSAULT-SIMPLE","WPD","VI",15,"W","F","9017868"],["Simple Assault","09/12/2009","ASSAULT-SIMPLE","WPD","VI","","","","9017868"],["Simple Assault","09/17/2009","ASSAULT-SIMPLE","WPD","VI",30,"W","M","9017887"],["Simple Assault","09/17/2009","ASSAULT-SIMPLE","WPD","VI","","","","9017887"],["Simple Assault","01/10/2010","ASSAULT-SIMPLE","WPD","VI",13,"W","M","10000030"],["Simple Assault","10/18/2010","ASSAULT-SIMPLE","WPD","VI",61,"W","F","10001606"],["Simple Assault","10/18/2010","ASSAULT-SIMPLE","WPD","VI",60,"W","M","10001606"],["Simple Assault","09/18/2009","ASSAULT-SIMPLE","WPD","VI",45,"W","M","9017897"],["Simple Assault","11/08/2009","ASSAULT-SIMPLE","WPD","VI",25,"B","M","9018180"],["Simple Assault","01/23/2010","ASSAULT-SIMPLE","WPD","VI",25,"B","F","10000095"],["Simple Assault","09/09/2010","ASSAULT-SIMPLE","WPD","VI",12,"B","F","10001384"],["Simple Assault","09/09/2010","ASSAULT-SIMPLE","WPD","VI",11,"W","F","10001384"],["Simple Assault","08/31/2010","ASSAULT-SIMPLE","WPD","VI",18,"B","M","10001331"],["Simple Assault","08/15/2009","ASSAULT-SIMPLE","WPD","VI",22,"W","F","9017710"],["Simple Assault","09/07/2010","ASSAULT-SIMPLE","WPD","VI",33,"W","M","10001373"],["Simple Assault","09/07/2010","ASSAULT-SIMPLE","WPD","VI",34,"W","F","10001373"],["Simple Assault","09/07/2010","ASSAULT-SIMPLE","WPD","VI",53,"W","F","10001373"],["Simple Assault","09/07/2010","ASSAULT-SIMPLE","WPD","VI",1,"W","F","10001373"],["Simple Assault","08/31/2010","ASSAULT-SIMPLE","WPD","VI","","","","10001331"],["Simple Assault","08/31/2010","ASSAULT-SIMPLE","WPD","VI",19,"B","M","10001331"],["Simple Assault","06/04/2010","ASSAULT-SIMPLE","WPD","VI",18,"B","F","10000797"],["Simple Assault","06/04/2010","ASSAULT-SIMPLE","WPD","VI",17,"B","F","10000797"],["Simple Assault","06/04/2010","ASSAULT-SIMPLE","WPD","VI","","","","10000797"],["Simple Assault","10/10/2009","ASSAULT-SIMPLE","WPD","VI",23,"B","M","9018007"],["Simple Assault","10/25/2010","ASSAULT-SIMPLE","WPD","VI",57,"W","F","10001656"],["Simple Assault","05/12/2010","ASSAULT-SIMPLE","WPD","VI",43,"W","F","10000666"],["Simple Assault","11/27/2009","ASSAULT-SIMPLE","WPD","VI",14,"B","F","9018271"],["Simple Assault","11/27/2009","ASSAULT-SIMPLE","WPD","VI",14,"B","F","9018271"],["Simple Assault","11/27/2009","ASSAULT-SIMPLE","WPD","VI","","","","9018271"],["Simple Assault","03/25/2010","ASSAULT-SIMPLE","WPD","VI",15,"B","M","10000380"],["Simple Assault","01/13/2010","ASSAULT-SIMPLE","WPD","VI",9,"W","F","10000046"],["Simple Assault","02/23/2010","ASSAULT-SIMPLE","WPD","VI",37,"W","F","10000227"],["Simple Assault","09/18/2009","ASSAULT-SIMPLE","WPD","VI",40,"W","F","9017899"],["Simple Assault","12/14/2010","ASSAULT-SIMPLE","WPD","VI",46,"W","F","10001948"],["Simple Assault","12/14/2010","ASSAULT-SIMPLE","WPD","VI","","","","10001948"],["Simple Assault","06/11/2010","ASSAULT-SIMPLE","WPD","VI",14,"W","F","10000840"],["Simple Assault","06/12/2010","ASSAULT-SIMPLE","WPD","VI",20,"B","F","10000844"],["Simple Assault","06/12/2010","ASSAULT-SIMPLE","WPD","VI",26,"B","M","10000844"],["Simple Assault","09/10/2010","ASSAULT-SIMPLE","WPD","VI",21,"W","M","10001388"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",8,"B","M","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",13,"W","M","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",12,"B","M","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",9,"B","M","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",11,"B","M","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",13,"B","F","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",12,"B","F","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",10,"B","M","10001590"],["Simple Assault","10/16/2010","ASSAULT-SIMPLE","WPD","VI",12,"B","M","10001590"],["Simple Assault","07/11/2010","ASSAULT-SIMPLE","WPD","VI",22,"W","F","10001024"],["Simple Assault","09/28/2010","ASSAULT-SIMPLE","WPD","VI",21,"W","F","10001494"],["Simple Assault","09/28/2010","ASSAULT-SIMPLE","WPD","VI",40,"B","F","10001494"],["Simple Assault","09/28/2010","ASSAULT-SIMPLE","WPD","VI",59,"B","M","10001494"],["Simple Assault","08/27/2010","ASSAULT-SIMPLE","WPD","VI",31,"W","M","10001308"],["Simple Assault","08/27/2010","ASSAULT-SIMPLE","WPD","VI","","","","10001308"],["Simple Assault","09/06/2009","ASSAULT-SIMPLE","WPD","VI",25,"W","M","9017838"],["Simple Assault","09/06/2009","ASSAULT-SIMPLE","WPD","VI","","","","9017838"],["Simple Assault","12/30/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",25,"B","F","10002036"],["Simple Assault","09/06/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",7,"B","M","9017836"],["Simple Assault","08/08/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",51,"B","F","10001191"],["Simple Assault","10/10/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",35,"W","F","9018008"],["Simple Assault","10/10/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",3,"W","F","9018008"],["Simple Assault","10/25/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",23,"W","M","9018101"],["Simple Assault","06/23/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",17,"W","F","10000897"],["Simple Assault","07/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",17,"W","M","10001045"],["Simple Assault","07/25/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",28,"B","M","10001109"],["Simple Assault","12/21/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",29,"W","M","9018390"],["Simple Assault","06/26/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",62,"B","M","10000924"],["Simple Assault","09/08/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",20,"W","F","9017845"],["Simple Assault","11/08/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",26,"W","M","10001737"],["Simple Assault","02/27/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",24,"B","F","10000251"],["Simple Assault","07/03/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",33,"W","F","10000969"],["Simple Assault","05/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",52,"B","M","10000683"],["Simple Assault","05/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",55,"B","F","10000683"],["Simple Assault","12/30/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",54,"B","F","10002033"],["Simple Assault","09/28/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",13,"W","M","10001500"],["Simple Assault","09/28/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",35,"W","F","10001500"],["Simple Assault","02/19/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",27,"B","F","10000202"],["Simple Assault","10/24/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",37,"W","F","9018090"],["Simple Assault","12/04/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",41,"B","F","10001891"],["Simple Assault","08/17/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",45,"W","F","10001244"],["Simple Assault","02/17/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",33,"B","F","10000190"],["Simple Assault","11/21/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",20,"B","F","9018235"],["Simple Assault","01/30/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",42,"B","F","10000126"],["Simple Assault","01/30/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",17,"B","F","10000126"],["Simple Assault","10/17/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",31,"W","F","9018051"],["Simple Assault","05/16/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",49,"W","F","10000688"],["Simple Assault","12/05/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",21,"A","F","9018311"],["Simple Assault","07/09/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",26,"W","F","10001008"],["Simple Assault","12/24/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",9,"W","F","10002000"],["Simple Assault","11/01/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",51,"W","F","9018135"],["Simple Assault","06/26/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",39,"B","F","10000916"],["Simple Assault","05/08/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",17,"W","F","10000642"],["Simple Assault","07/11/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",25,"W","F","10001022"],["Simple Assault","10/04/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",15,"B","M","9017978"],["Simple Assault","10/30/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",24,"B","F","9018124"],["Simple Assault","06/08/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",29,"B","F","10000817"],["Simple Assault","06/22/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",39,"B","F","10000895"],["Simple Assault","03/27/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",46,"B","M","10000395"],["Simple Assault","12/05/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",51,"W","F","9018310"],["Simple Assault","11/12/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",42,"W","F","9018195"],["Simple Assault","12/19/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",42,"W","F","9018382"],["Simple Assault","12/19/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI","","","","9018382"],["Simple Assault","08/13/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",31,"W","M","10001215"],["Simple Assault","02/14/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",22,"B","F","10000178"],["Simple Assault","03/25/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",47,"B","M","10000383"],["Simple Assault","06/12/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",50,"B","F","10000847"],["Simple Assault","12/22/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",52,"B","F","9018392"],["Simple Assault","12/22/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI","","","","9018392"],["Simple Assault","10/18/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",65,"W","F","10001607"],["Simple Assault","10/18/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",74,"W","M","10001607"],["Simple Assault","10/25/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",20,"B","F","10001657"],["Simple Assault","11/28/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",11,"W","F","10001861"],["Simple Assault","11/28/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",21,"W","M","10001862"],["Simple Assault","07/30/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",34,"W","F","10001136"],["Simple Assault","07/30/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",33,"W","M","10001136"],["Simple Assault","11/17/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",45,"B","F","9018221"],["Simple Assault","07/07/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",22,"B","F","10000994"],["Simple Assault","12/24/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",39,"W","F","9018404"],["Simple Assault","07/27/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",23,"W","F","10001125"],["Simple Assault","02/06/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",51,"B","F","10000149"],["Simple Assault","08/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",25,"B","F","10001233"],["Simple Assault","08/19/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",35,"W","F","10001255"],["Simple Assault","08/20/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",40,"B","F","10001266"],["Simple Assault","08/20/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",31,"B","F","10001266"],["Simple Assault","11/22/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",4,"B","M","10001824"],["Simple Assault","11/27/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",21,"W","F","9018268"],["Simple Assault","11/23/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",16,"B","F","9018255"],["Simple Assault","11/27/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",26,"W","M","9018268"],["Simple Assault","11/23/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",32,"W","F","9018255"],["Simple Assault","11/18/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",29,"W","F","10001793"],["Simple Assault","07/20/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",50,"B","M","10001080"],["Simple Assault","07/20/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",50,"B","F","10001080"],["Simple Assault","07/20/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",31,"B","M","10001080"],["Simple Assault","11/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",44,"W","F","10001772"],["Simple Assault","05/17/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",25,"B","M","10000702"],["Simple Assault","07/07/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",34,"W","F","10000996"],["Simple Assault","11/14/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",29,"B","F","10001768"],["Simple Assault","12/02/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",23,"B","F","10001877"],["Simple Assault","09/15/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",30,"W","F","9017883"],["Simple Assault","01/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",19,"W","F","10000055"],["Simple Assault","01/19/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",26,"W","M","10000070"],["Simple Assault","01/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",24,"W","M","10000055"],["Simple Assault","08/06/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",24,"B","F","10001175"],["Simple Assault","11/22/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",30,"W","F","9018247"],["Simple Assault","05/15/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",20,"B","F","10000684"],["Simple Assault","11/27/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",20,"B","F","10001849"],["Simple Assault","12/02/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",55,"B","F","10001882"],["Simple Assault","05/28/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",38,"W","F","10000758"],["Simple Assault","06/07/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",25,"B","F","10000809"],["Simple Assault","06/07/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",24,"B","M","10000809"],["Simple Assault","06/27/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",55,"B","F","10000931"],["Simple Assault","01/22/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",45,"W","M","10000091"],["Simple Assault","03/11/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",29,"W","F","10000305"],["Simple Assault","02/17/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",14,"B","M","10000183"],["Simple Assault","09/14/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",25,"B","F","10001422"],["Simple Assault","06/04/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",29,"B","F","10000793"],["Simple Assault","08/24/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",21,"W","M","9017752"],["Simple Assault","09/25/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",16,"W","M","9017939"],["Simple Assault","10/28/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",15,"B","F","10001678"],["Simple Assault","07/18/2010","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",48,"W","M","10001063"],["Simple Assault","08/14/2009","ASSAULT-SIMPLE-DOMESTIC","WPD","VI",20,"W","F","9017701"],["Simple Assault","09/03/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",37,"W","M","10001345"],["Simple Assault","09/03/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",21,"W","M","10001345"],["Simple Assault","09/03/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI","","","","10001345"],["Simple Assault","10/16/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",40,"W","F","10001587"],["Simple Assault","11/07/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",42,"W","M","10001732"],["Simple Assault","05/21/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",28,"W","M","10000722"],["Simple Assault","05/21/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI","","","","10000722"],["Simple Assault","02/19/2010","ASSAULT-POLICE OFFICER (SIMPLE)","WPD","VI",24,"W","F","10000200"],["",null,null,null,null,""]]

    var crime_table = document.getElementById('crime_table');
    var tbody = document.createElement('tbody');
    crime_table.appendChild(tbody);

    function addRow(arr) {
        var tr = document.createElement('tr');
        for (var i = 0; i < arr.length; i++) {
            var td = document.createElement('td');
            td.innerHTML = arr[i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    raw_data.forEach(addRow)
}

window.addEventListener('load', function(){
    generateCharts();
    generateTable();
});
