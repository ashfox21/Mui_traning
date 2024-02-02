import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack
} from '@mui/material';

function MuiTable() {
  return (
    <Stack p={4}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell align='center'>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map(el => (
              <TableRow>
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.first_name}</TableCell>
                <TableCell>{el.last_name}</TableCell>
                <TableCell align='center'>{el.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

const tableData = [
  {
    id: 1,
    first_name: 'Georas',
    last_name: 'Grishunin',
    email: 'ggrishunin0@devhub.com',
    gender: 'Male',
    ip_address: '167.50.200.217',
  },
  {
    id: 2,
    first_name: 'Flory',
    last_name: 'Beartup',
    email: 'fbeartup1@jigsy.com',
    gender: 'Male',
    ip_address: '164.179.189.82',
  },
  {
    id: 3,
    first_name: 'Ophelie',
    last_name: 'Medmore',
    email: 'omedmore2@craigslist.org',
    gender: 'Female',
    ip_address: '6.14.38.127',
  },
  {
    id: 4,
    first_name: 'Angus',
    last_name: 'Torricella',
    email: 'atorricella3@irs.gov',
    gender: 'Male',
    ip_address: '123.193.189.249',
  },
  {
    id: 5,
    first_name: 'Garwin',
    last_name: 'Tanner',
    email: 'gtanner4@google.fr',
    gender: 'Male',
    ip_address: '130.160.43.43',
  },
  {
    id: 6,
    first_name: 'Anders',
    last_name: 'Preene',
    email: 'apreene5@digg.com',
    gender: 'Male',
    ip_address: '89.196.158.255',
  },
  {
    id: 7,
    first_name: 'Aurel',
    last_name: 'Lucian',
    email: 'alucian6@tumblr.com',
    gender: 'Female',
    ip_address: '46.56.206.83',
  },
  {
    id: 8,
    first_name: 'Jareb',
    last_name: 'Cruces',
    email: 'jcruces7@woothemes.com',
    gender: 'Male',
    ip_address: '242.63.4.234',
  },
  {
    id: 9,
    first_name: 'Rubina',
    last_name: 'Tomasian',
    email: 'rtomasian8@comsenz.com',
    gender: 'Female',
    ip_address: '171.128.11.57',
  },
  {
    id: 10,
    first_name: 'Giraldo',
    last_name: 'Sprason',
    email: 'gsprason9@umn.edu',
    gender: 'Male',
    ip_address: '227.127.89.201',
  },
];

export default MuiTable;
