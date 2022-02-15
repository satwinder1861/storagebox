import React from 'react';
import styled from 'styled-components';
const Footer = styled.div`
background-color: #131a22;
       color:#fff;
`;
const Table = styled.table`
width:100%;
`;
const Tbody = styled.tbody`
display: table-row-group;
    vertical-align: middle;
`;
const Td = styled.td`
padding-left: 20px;
`;
const H4 = styled.h4`
padding-left: 20px;
`;
const Tp = styled.p`
font-size:12px;
`;
const Content = styled.div`
display:flex;
font-size:15px;
padding-top:20px;
padding-bottom:10px;
justify-content: center;
`;
const ContentItem = styled.div`
padding-left:5px;
`;


const Footer1 = () => {

    return(
        <Footer>
        <Table class="footerTable">
          <Tbody>
            <tr>
              <Td><H4>Footer</H4>
              <Tp>Software Engineering</Tp></Td>
              <Td><H4>Footer</H4>
              <Tp>Software Engineering</Tp></Td>
              <Td><H4>Footer</H4>
              <Tp>Software Engineering</Tp></Td>
              <Td><H4>Footer</H4>
            <Tp>Software Engineering</Tp></Td>
            </tr>
            <tr>
              <Td><H4>Footer</H4>
              <Tp>Software Engineering</Tp></Td>
              <Td><H4>Footer</H4>
              <Tp>Software Engineering</Tp></Td>
              <Td><H4>Footer</H4>
              <Tp>Software Engineering</Tp></Td>
              <Td><H4>Footer</H4>
                <Tp>Cloud Engineering</Tp></Td>
            </tr>
          </Tbody>
        </Table>

        <Content>
        <ContentItem> Satwinder Singh</ContentItem>
       <ContentItem>Thanks for  visiting my website</ContentItem>
        </Content>
      </Footer>
    )
    }
    export default Footer1;