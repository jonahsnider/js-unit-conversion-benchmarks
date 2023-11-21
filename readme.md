# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 21 Nov 2023 07:50:55 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1149-836 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `210`ns (116%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (194%)        | `432`ns (239%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (249%)        | `562`ns (310%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `542`ns (299%)        | `682`ns (377%)                 | `1,845,018`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `913`ns (504%)        | `1,133`ns (626%)               | `1,095,290`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,183`ns (654%)      | `1,553`ns (858%)               | `845,309`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (664%)      | `1,603`ns (886%)               | `831,947`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,315`ns (1,279%)    | `2,845`ns (1,572%)             | `431,965`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,111`ns (2,271%)    | `5,051`ns (2,791%)             | `243,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,975`ns (4,959%)    | `9,775`ns (5,401%)             | `111,421`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `842`ns (109%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,519`ns (4,083%)   | `38,527`ns (4,991%)            | `31,727`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,839`ns (5,160%)   | `40,511`ns (5,248%)            | `25,101`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `192`ns (100%)        | `221`ns (115%)                 | `5,208,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (178%)        | `391`ns (204%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (256%)        | `531`ns (277%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (313%)        | `651`ns (339%)                 | `1,663,894`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,242`ns (647%)      | `1,324`ns (690%)               | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,392`ns (725%)      | `1,492`ns (777%)               | `718,391`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,771`ns (2,485%)    | `4,991`ns (2,599%)             | `209,600`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `180`ns (100%)        | `202`ns (112%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (190%)        | `422`ns (234%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (244%)        | `512`ns (284%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,183`ns (657%)      | `1,343`ns (746%)               | `845,309`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,635`ns (908%)      | `1,924`ns (1,069%)             | `611,621`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,611`ns (3,117%)    | `6,055`ns (3,364%)             | `178,221`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,903`ns (3,279%)    | `6,863`ns (3,813%)             | `169,405`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `583`ns (100%)        | `652`ns (112%)                 | `1,715,266`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `613`ns (105%)        | `672`ns (115%)                 | `1,631,321`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (117%)        | `761`ns (131%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `290`ns (100%)        | `311`ns (107%)                 | `3,448,276`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (183%)        | `582`ns (201%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
