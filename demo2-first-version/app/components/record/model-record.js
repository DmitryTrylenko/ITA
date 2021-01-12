export default class ModelRecord{
    link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';

    records = [];
    categories = [];

    names = [
        {
            name : 'ID',
            type : 'integer'
        },
        {
            name : 'productName',
            type : 'string'
        },
        {
            name : 'manufacture',
            type : 'string'
        },
        {
            name : 'category',
            type : 'string'
        },
        {
            name : 'ingredients',
            type : 'string'
        },
        {
            name : 'amount',
            type : 'integer'
        },
        {
            name : 'units',
            type : 'string'
        },
        {
            name : 'price',
            type : 'float'
        },
        {
            name : 'img',
            type : 'string'
        }
    ];

    getRecords = () => {
        return fetch(this.link)
            .then((r) => r.json())
            .then((data) => {
                this.records = this.parseData(data.feed.entry).slice(1);
                return {
                    records: this.records,
                    categories: this.categories
                };
            });
    }

    parseData = arr => {
        const shift = this.names.length;
        return arr.reduce((acc, { content }, i) => {
            const index = Math.floor(i / shift);
            const { name, type } = this.names[i % shift];

            if (name === 'category' && !this.categories.includes(content.$t)) {
                this.categories.push(content.$t);
            }

            if(!acc[index]){
                acc[index] = {};
            }
            acc[index][name] = this.parseContent(content.$t, type);

            return acc;
        }, []);
    }

    parseContent = (content, type = 'string') => {
        let res = content;
        switch(type){
            case 'float' :{
                res = +(content.replace(',', '.'));
                break;
            }
            case 'date' : {
                res = new Date(content);
                break;
            }
            default: {
                res = content;
                break;
            }
        }

        return res;
    }

    sort = type => {
        const sortMethods = {
            'cheap': (a, b) => a.price - b.price,
            'exp': (a, b) => b.price - a.price
        };

        this.records.sort(sortMethods[type]);

        return this.records;
    }

    search = text => {
        const t = text.toLowerCase().trim();
        return this.records.filter(({ productName }) => productName.toLowerCase().includes(t));
    }

    filter = (categ) => {
         return this.records.filter(({ category }) => category === categ);
      }
}