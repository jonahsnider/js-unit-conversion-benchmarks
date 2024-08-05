# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 05 Aug 2024 20:46:20 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az1040-470 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `80`ns (100%)         | `90`ns (113%)                  | `12,500,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (414%)        | `381`ns (476%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `371`ns (464%)        | `421`ns (526%)                 | `2,695,418`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (689%)        | `631`ns (789%)                 | `1,814,882`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,092`ns (1,365%)    | `1,192`ns (1,490%)             | `915,751`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (1,515%)    | `1,412`ns (1,765%)             | `825,083`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,322`ns (1,652%)    | `1,483`ns (1,854%)             | `756,430`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (3,331%)    | `2,867`ns (3,584%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (5,689%)    | `4,991`ns (6,239%)             | `219,732`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `64,351`ns (80,439%)  | `65,055`ns (81,319%)           | `15,540`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `1,242`ns (149%)               | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,575`ns (3,434%)   | `42,943`ns (5,161%)            | `34,996`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,479`ns (9,192%)   | `92,287`ns (11,092%)           | `13,075`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `81`ns (100%)         | `90`ns (111%)                  | `12,345,679`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (347%)        | `310`ns (383%)                 | `3,558,719`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `291`ns (359%)        | `321`ns (396%)                 | `3,436,426`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (581%)        | `521`ns (643%)                 | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,262`ns (1,558%)    | `1,362`ns (1,681%)             | `792,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (5,619%)    | `4,759`ns (5,875%)             | `219,732`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,607`ns (40,256%)  | `33,215`ns (41,006%)           | `30,668`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (444%)        | `420`ns (600%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `320`ns (457%)        | `401`ns (573%)                 | `3,125,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,213`ns (1,733%)    | `1,463`ns (2,090%)             | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,603`ns (2,290%)    | `2,093`ns (2,990%)             | `623,830`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,863`ns (8,376%)    | `7,035`ns (10,050%)            | `170,561`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,527`ns (100,753%) | `71,807`ns (102,581%)          | `14,179`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `331`ns (100%)        | `370`ns (112%)                 | `3,021,148`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (121%)        | `431`ns (130%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `491`ns (148%)        | `531`ns (160%)                 | `2,036,660`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `180`ns (257%)        | `200`ns (286%)                 | `5,555,556`/sec       |

<!-- endblock(results) -->
