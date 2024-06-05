# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 05 Jun 2024 13:11:01 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1205-769 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (301%)        | `440`ns (367%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (393%)        | `541`ns (451%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (493%)        | `751`ns (626%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,062`ns (885%)      | `1,232`ns (1,027%)             | `941,620`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,342`ns (1,118%)    | `1,763`ns (1,469%)             | `745,156`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,392`ns (1,160%)    | `1,793`ns (1,494%)             | `718,391`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (2,221%)    | `3,117`ns (2,598%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,511`ns (3,759%)    | `5,611`ns (4,676%)             | `221,680`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,703`ns (60,586%)  | `74,559`ns (62,133%)           | `13,755`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,112`ns (131%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,255`ns (4,255%)   | `53,215`ns (6,246%)            | `27,582`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,207`ns (10,118%)  | `159,615`ns (18,734%)          | `11,600`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (224%)        | `331`ns (255%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (339%)        | `491`ns (378%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (416%)        | `590`ns (454%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (1,010%)    | `1,443`ns (1,110%)             | `761,615`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (3,516%)    | `4,791`ns (3,685%)             | `218,771`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,439`ns (28,799%)  | `38,079`ns (29,292%)           | `26,710`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `130`ns (117%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (334%)        | `420`ns (378%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `480`ns (432%)        | `541`ns (487%)                 | `2,083,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (1,273%)    | `1,543`ns (1,390%)             | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,723`ns (1,552%)    | `1,934`ns (1,742%)             | `580,383`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,623`ns (5,967%)    | `7,355`ns (6,626%)             | `150,989`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,663`ns (73,570%)  | `82,815`ns (74,608%)           | `12,245`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `521`ns (111%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `571`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (130%)        | `681`ns (145%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `241`ns (110%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (246%)        | `601`ns (273%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
